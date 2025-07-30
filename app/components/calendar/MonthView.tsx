import { Event } from "./types";
import translations from "./translations";

interface MonthViewProps {
  readonly monthDays: {
    date: Date;
    isCurrentMonth: boolean;
  }[];
  readonly events: Event[];
  readonly translations: typeof translations.en;
}

export function MonthView({ monthDays, events, translations }: MonthViewProps) {
  const getEventsForDay = (day: Date) => {
    return events.filter(
      (event) =>
        event.start.getDate() === day.getDate() &&
        event.start.getMonth() === day.getMonth() &&
        event.start.getFullYear() === day.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Day headers */}
      <div className="grid grid-cols-7 border-b border-gray-200">
        {[
          translations.sun || "Sun",
          translations.mon || "Mon",
          translations.tue || "Tue",
          translations.wed || "Wed",
          translations.thu || "Thu",
          translations.fri || "Fri",
          translations.sat || "Sat",
        ].map((day, i) => (
          <div
            key={i}
            className="p-3 text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Month days */}
      <div className="grid grid-cols-7 divide-x divide-y divide-gray-200">
        {monthDays.map((day, i) => {
          const dayEvents = getEventsForDay(day.date);
          const isToday = day.date.toDateString() === new Date().toDateString();

          return (
            <div
              key={i}
              className={`min-h-24 p-1 ${
                !day.isCurrentMonth ? "bg-gray-50" : ""
              }`}
            >
              <div
                className={`text-right p-1 text-sm ${
                  isToday
                    ? "bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-auto"
                    : day.isCurrentMonth
                    ? "text-gray-900"
                    : "text-gray-400"
                }`}
              >
                {day.date.getDate()}
              </div>
              <div className="mt-1 space-y-1 max-h-20 overflow-y-auto">
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`text-xs p-1 rounded truncate ${event.color}`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
