import { useState } from "react";
import { Plus } from "lucide-react";
import { useOutletContext } from "react-router";
import { DashboardOutletContext } from "~/types/dashboard";
import { CalendarControls } from "~/components/calendar/CalendarControls";
import { WeekView } from "~/components/calendar/WeekView";
import { MonthView } from "~/components/calendar/MonthView";
import { Event, ViewMode } from "~/components/calendar/types";
import translations from "~/components/calendar/translations";

export default function DashboardPage() {
  const { language } = useOutletContext<DashboardOutletContext>();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>("week");
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Reunión de equipo",
      start: new Date(new Date().setHours(9, 0, 0, 0)),
      end: new Date(new Date().setHours(10, 30, 0, 0)),
      color: "bg-blue-100 border-l-4 border-blue-500",
    },
    {
      id: 2,
      title: "Almuerzo con cliente",
      start: new Date(new Date().setHours(12, 0, 0, 0)),
      end: new Date(new Date().setHours(13, 30, 0, 0)),
      color: "bg-green-100 border-l-4 border-green-500",
    },
    {
      id: 3,
      title: "Revisión de proyecto",
      start: new Date(new Date().setDate(new Date().getDate() + 2)),
      end: new Date(new Date().setDate(new Date().getDate() + 2)),
      color: "bg-purple-100 border-l-4 border-purple-500",
    },
  ]);

  const t = translations[language] || translations.en;

  // Navigation
  const prevPeriod = () => {
    const newDate = new Date(currentDate);
    viewMode === "week"
      ? newDate.setDate(newDate.getDate() - 7)
      : newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextPeriod = () => {
    const newDate = new Date(currentDate);
    viewMode === "week"
      ? newDate.setDate(newDate.getDate() + 7)
      : newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Get week days
  const getWeekDays = () => {
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      return date;
    });
  };

  // Get month days
  const getMonthDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Previous month days to complete first week
    const prevMonthDays = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    // Next month days to complete last week
    const nextMonthDays = 6 - lastDay.getDay();

    const days = [];

    // Previous month days
    for (let i = prevMonthDays - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
      });
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Next month days
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  return (
    <div className="mx-auto">
      <CalendarControls
        currentDate={currentDate}
        viewMode={viewMode}
        translations={t}
        onPrevPeriod={prevPeriod}
        onNextPeriod={nextPeriod}
        onGoToToday={goToToday}
        onChangeViewMode={setViewMode}
      />

      {/* Calendar view */}
      {viewMode === "week" ? (
        <WeekView weekDays={getWeekDays()} events={events} translations={t} />
      ) : (
        <MonthView
          monthDays={getMonthDays()}
          events={events}
          translations={t}
        />
      )}

      {/* Add new event button */}
      <div className="mt-4 flex justify-end">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          {t.newEvent}
        </button>
      </div>
    </div>
  );
}
