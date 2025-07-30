import { Event } from "./types";
import translations from "./translations";

interface WeekViewProps {
  readonly weekDays: Date[];
  readonly events: Event[];
  readonly translations: typeof translations.en;
}

export function WeekView({ weekDays, events, translations }: WeekViewProps) {
  const hours = Array.from({ length: 24 }).map((_, i) => i);

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
      <div className="grid grid-cols-8 border-b border-gray-200">
        <div className="p-3 border-r border-gray-200"></div>
        {weekDays.map((day, i) => (
          <div
            key={i}
            className={`p-3 text-center ${
              i < 6 ? "border-r border-gray-200" : ""
            }`}
          >
            <div className="text-sm font-medium text-gray-500">
              {day.toLocaleDateString(translations.languageCode || "en", { weekday: "short" })}
            </div>
            <div
              className={`text-lg font-semibold mt-1 mx-auto w-8 h-8 flex items-center justify-center rounded-full ${
                day.toDateString() === new Date().toDateString()
                  ? "bg-blue-600 text-white"
                  : "text-gray-900"
              }`}
            >
              {day.getDate()}
            </div>
          </div>
        ))}
      </div>

      {/* Hour rows */}
      <div className="divide-y divide-gray-200">
        {hours.map((hour) => (
          <div key={hour} className="grid grid-cols-8 min-h-12">
            <div className="p-2 border-r border-gray-200 text-right pr-3 text-sm text-gray-500">
              {hour === 0
                ? "12 AM"
                : hour < 12
                ? `${hour} AM`
                : hour === 12
                ? "12 PM"
                : `${hour - 12} PM`}
            </div>

            {weekDays.map((day, dayIndex) => {
              const dayEvents = getEventsForDay(day).filter(
                (event) =>
                  event.start.getHours() <= hour && event.end.getHours() >= hour
              );

              return (
                <div
                  key={dayIndex}
                  className={`relative ${
                    dayIndex < 6 ? "border-r border-gray-200" : ""
                  }`}
                >
                  {dayEvents.map((event) => {
                    if (event.start.getHours() === hour) {
                      const durationHours =
                        event.end.getHours() - event.start.getHours();
                      const durationMinutes =
                        event.end.getMinutes() - event.start.getMinutes();
                      const duration = durationHours + durationMinutes / 60;

                      return (
                        <div
                          key={event.id}
                          className={`absolute left-0 right-0 mx-1 p-2 rounded-md text-sm ${event.color}`}
                          style={{
                            top: `${(event.start.getMinutes() / 60) * 40}px`,
                            height: `${duration * 40}px`,
                            zIndex: 10,
                          }}
                        >
                          <div className="font-medium truncate">
                            {event.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {event.start.toLocaleTimeString(translations.languageCode || "en", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}{" "}
                            -{" "}
                            {event.end.toLocaleTimeString(translations.languageCode || "en", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
