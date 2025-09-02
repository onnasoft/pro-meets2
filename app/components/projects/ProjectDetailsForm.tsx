import { User, Calendar, Flag } from "lucide-react";
import { useEffect, useState } from "react";
import { OrganizationMember, ProjectStatus } from "@onnasoft/pro-meets-core";

interface Translations {
  fields: {
    leader: string;
    startDate: string;
    dueDate: string;
    status: string;
  };
  placeholders: {
    leader: string;
    status: string;
  };
  required: string;
}

interface ProjectDetailsFormProps {
  readonly leaders: OrganizationMember[];
  readonly selectedLeader?: OrganizationMember;
  readonly startDate: string;
  readonly dueDate: string;
  readonly status: ProjectStatus;
  readonly onLeaderSelect: (leader: OrganizationMember | null) => void;
  readonly onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onStatusChange: (status: ProjectStatus) => void;
  readonly errors: Record<string, string>;
  readonly canUpdate?: boolean;
  readonly translations: Translations;
}

export default function ProjectDetailsForm({
  leaders,
  selectedLeader,
  startDate,
  dueDate,
  status,
  onLeaderSelect,
  onDateChange,
  onStatusChange,
  errors,
  canUpdate = true,
  translations,
}: ProjectDetailsFormProps) {
  const [leaderInput, setLeaderInput] = useState(
    selectedLeader?.user?.name || ""
  );

  const statusOptions: { value: ProjectStatus; label: string }[] = [
    { value: ProjectStatus.PLANNING, label: "Not Started" },
    { value: ProjectStatus.IN_PROGRESS, label: "In Progress" },
    { value: ProjectStatus.ON_HOLD, label: "On Hold" },
    { value: ProjectStatus.COMPLETED, label: "Completed" },
    { value: ProjectStatus.CANCELLED, label: "Cancelled" },
  ];

  const handleLeaderInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLeaderInput(value);

    // Clear selection if input doesn't match any leader
    if (!leaders.some((leader) => leader.user?.name === value)) {
      onLeaderSelect(null);
    }
  };

  const handleLeaderSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedName = e.target.value;
    const leader = leaders.find((l) => l.user?.name === selectedName);

    if (leader) {
      onLeaderSelect(leader);
      setLeaderInput(leader.user?.name ?? "");
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(e.target.value as ProjectStatus);
  };

  useEffect(() => {
    if (selectedLeader) {
      setLeaderInput(selectedLeader.user?.name || "");
    }
  }, [selectedLeader]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Leader Selection */}
      <div className="md:col-span-1">
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <User className="h-4 w-4 mr-2 text-gray-500" />
          {translations.fields.leader}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            list="leaders-list"
            name="leader"
            value={leaderInput}
            onChange={handleLeaderInputChange}
            onSelect={handleLeaderSelect}
            readOnly={!canUpdate}
            placeholder={translations.placeholders.leader}
            className={`w-full px-3 py-2 border rounded-md shadow-xs focus:outline-hidden ${
              errors.leader ? "border-red-300" : "border-gray-300"
            } ${!canUpdate ? "bg-gray-100 cursor-not-allowed" : ""}`}
          />
          <datalist id="leaders-list">
            {leaders.map((leader) => (
              <option key={leader.id} value={leader.user?.name} />
            ))}
          </datalist>
        </div>
        {errors.leader && (
          <p className="mt-1 text-sm text-red-600">{errors.leader}</p>
        )}
      </div>

      {/* Start Date */}
      <div className="md:col-span-1">
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          {translations.fields.startDate}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={onDateChange}
          readOnly={!canUpdate}
          className={`w-full px-3 py-2 border rounded-md shadow-xs focus:outline-hidden ${
            errors.startDate ? "border-red-300" : "border-gray-300"
          } ${!canUpdate ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
        {errors.startDate && (
          <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>
        )}
      </div>

      {/* Due Date */}
      <div className="md:col-span-1">
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          {translations.fields.dueDate}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={onDateChange}
          readOnly={!canUpdate}
          min={startDate}
          className={`w-full px-3 py-2 border rounded-md shadow-xs focus:outline-hidden ${
            errors.dueDate ? "border-red-300" : "border-gray-300"
          } ${!canUpdate ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
        {errors.dueDate && (
          <p className="mt-1 text-sm text-red-600">{errors.dueDate}</p>
        )}
      </div>

      {/* Status */}
      <div className="md:col-span-1">
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Flag className="h-4 w-4 mr-2 text-gray-500" />
          {translations.fields.status}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          name="status"
          value={status}
          onChange={handleStatusChange}
          disabled={!canUpdate}
          className={`w-full px-3 py-2 border rounded-md shadow-xs focus:outline-hidden ${
            errors.status ? "border-red-300" : "border-gray-300"
          } ${!canUpdate ? "bg-gray-100 cursor-not-allowed" : ""}`}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.status && (
          <p className="mt-1 text-sm text-red-600">{errors.status}</p>
        )}
      </div>
    </div>
  );
}
