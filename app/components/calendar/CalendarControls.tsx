import { ChevronLeft, ChevronRight, Grid, List } from "lucide-react";
import translations from "./translations";

interface CalendarControlsProps {
  readonly currentDate: Date;
  readonly viewMode: "week" | "month";
  readonly translations: typeof translations.en;
  readonly onPrevPeriod: () => void;
  readonly onNextPeriod: () => void;
  readonly onGoToToday: () => void;
  readonly onChangeViewMode: (mode: "week" | "month") => void;
}

export function CalendarControls({
  currentDate,
  viewMode,
  translations,
  onPrevPeriod,
  onNextPeriod,
  onGoToToday,
  onChangeViewMode,
}: CalendarControlsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-2">
        <button
          onClick={onGoToToday}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
        >
          {translations.today || "Today"}
        </button>

        <div className="flex items-center">
          <button
            onClick={onPrevPeriod}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <h2 className="text-xl font-semibold mx-2 min-w-[180px] text-center">
            {viewMode === "week"
              ? `${translations.weekOf || "Week of"} ${currentDate.toLocaleDateString(
                  translations.languageCode || "en",
                  {
                    day: "2-digit",
                    month: "short",
                  }
                )}`
              : currentDate.toLocaleDateString(translations.languageCode || "en", {
                  month: "long",
                  year: "numeric",
                })}
          </h2>

          <button
            onClick={onNextPeriod}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onChangeViewMode("month")}
          className={`flex items-center px-3 py-1 rounded-md text-sm font-medium ${
            viewMode === "month"
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          <Grid className="h-4 w-4 mr-1" />
          {translations.month || "Month"}
        </button>
        <button
          onClick={() => onChangeViewMode("week")}
          className={`flex items-center px-3 py-1 rounded-md text-sm font-medium ${
            viewMode === "week"
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          <List className="h-4 w-4 mr-1" />
          {translations.week || "Week"}
        </button>
      </div>
    </div>
  );
}
