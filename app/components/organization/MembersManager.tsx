import { useState } from "react";
import { CirclePlus, Pencil, X } from "lucide-react";
import { MemberRole, Organization, OrganizationMember } from "~/types/models";
import { createOrganizationMember } from "~/services/organization-members";
import useErrorStore from "~/store/error";

interface RoleOption {
  value: MemberRole;
  label: string;
}

const roles: RoleOption[] = [
  { value: MemberRole.ADMIN, label: "Admin" },
  { value: MemberRole.MEMBER, label: "Member" },
  { value: MemberRole.GUEST, label: "Guest" },
];

interface MembersManagerProps {
  readonly organization?: Organization;
  readonly members: OrganizationMember[];
  readonly canUpdate?: boolean;
}

export default function MembersManager({
  members,
  organization,
  canUpdate = true,
}: MembersManagerProps) {
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null);
  const [editMemberRole, setEditMemberRole] = useState<MemberRole | null>(null);
  const [newMemberEmail, setNewMemberEmail] = useState<string>("");
  const [newMemberRole, setNewMemberRole] = useState<MemberRole>(
    roles[0].value
  );
  const [errors, setErrors] = useState<{ members?: string }>({});
  const setErrorState = useErrorStore((state) => state.setError);

  const startEditingMember = (id: string) => {
    setEditingMemberId(id);
    const member = members.find((m) => m.id === id);
    if (member) setEditMemberRole(member.role);
  };

  const cancelEditing = () => {
    setEditingMemberId(null);
    setEditMemberRole(null);
  };

  const saveMemberRole = (id: string) => {
    console.log("Save role for", id, "to", editMemberRole);
    cancelEditing();
  };

  const handleRemoveMember = (id: string) => {
    console.log("Remove member", id);
  };

  const handleAddMember = async () => {
    if (!newMemberEmail) {
      setErrors({ members: "Email is required" });
      return;
    }
    if (!newMemberRole) {
      setErrors({ members: "Role is required" });
      return;
    }
    if (!organization) {
      setErrors({ members: "Organization is required" });
      return;
    }

    try {
      await createOrganizationMember({
        email: newMemberEmail,
        role: newMemberRole,
        organizationId: organization.id,
      });
      setNewMemberEmail("");
      setNewMemberRole(roles[0].value);
      setErrors({});
      window.location.reload();
    } catch (error) {
      setErrorState(
        "Failed to add member",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  };

  return (
    <div className="mt-2 space-y-2">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
        >
          <div className="flex-1">
            <p className="font-medium">{member.user?.name}</p>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>

          {editingMemberId === member.id ? (
            <div className="flex items-center space-x-2">
              <select
                value={editMemberRole ?? ""}
                onChange={(e) =>
                  setEditMemberRole(e.target.value as MemberRole)
                }
                className="border border-gray-300 rounded-md px-2 py-1 text-sm"
              >
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => saveMemberRole(member.id)}
                className="text-green-600 hover:text-green-800"
              >
                Save
              </button>
              <button
                type="button"
                onClick={cancelEditing}
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">
                {member.role}
              </span>
              <button
                type="button"
                disabled={member.role === MemberRole.OWNER || !canUpdate}
                onClick={() => startEditingMember(member.id)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                type="button"
                disabled={member.role === MemberRole.OWNER || !canUpdate}
                onClick={() => handleRemoveMember(member.id)}
                className="text-red-600 hover:text-red-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      ))}

      {canUpdate && (
        <div className="mt-4 flex items-end space-x-2">
          <div className="flex-1">
            <label
              htmlFor="new-member-email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Add new member
            </label>
            <input
              id="new-member-email"
              type="email"
              value={newMemberEmail}
              onChange={(e) => setNewMemberEmail(e.target.value)}
              placeholder="user@example.com"
              className={`w-full px-3 py-2 h-10 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                errors.members ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.members && (
              <p className="mt-1 text-sm text-red-600">{errors.members}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="new-member-role"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role
            </label>
            <select
              id="new-member-role"
              value={newMemberRole}
              onChange={(e) => setNewMemberRole(e.target.value as MemberRole)}
              className="border h-10 border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleAddMember}
            className="px-3 py-2 h-10 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <CirclePlus className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
