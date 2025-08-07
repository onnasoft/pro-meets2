import { User, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { OrganizationMember } from "~/types/models";

interface Translations {
  fields: {
    leader: string;
    startDate: string;
    dueDate: string;
  };
  placeholders: {
    leader: string;
  };
  required: string;
}

interface LeaderSelectionFormProps {
  readonly leaders: OrganizationMember[];
  readonly selectedLeader?: OrganizationMember;
  readonly startDate: string;
  readonly dueDate: string;
  readonly onLeaderSelect: (leader: OrganizationMember | null) => void;
  readonly onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly errors: Record<string, string>;
  readonly canUpdate?: boolean;
  readonly translations: Translations;
}

export function LeaderSelectionForm({
  leaders,
  selectedLeader,
  startDate,
  dueDate,
  onLeaderSelect,
  onDateChange,
  errors,
  canUpdate = true,
  translations,
}: LeaderSelectionFormProps) {
  const [leaderInput, setLeaderInput] = useState(
    selectedLeader?.user?.name || ""
  );

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

  useEffect(() => {
    if (selectedLeader) {
      setLeaderInput(selectedLeader.user?.name || "");
    }
  }, [selectedLeader]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
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
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
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
          min={startDate} // Ensure due date can't be before start date
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
            errors.dueDate ? "border-red-300" : "border-gray-300"
          } ${!canUpdate ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
        {errors.dueDate && (
          <p className="mt-1 text-sm text-red-600">{errors.dueDate}</p>
        )}
      </div>
    </div>
  );
}
