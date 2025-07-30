export type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  color: string;
};

export type ViewMode = "week" | "month";
