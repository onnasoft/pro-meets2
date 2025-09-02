import { User } from "@onnasoft/pro-meets-core";

export interface Message {
  id: string;
  user: User;
  content: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  user: User;
  messages: Message[];
  unread: number;
  isOpen?: boolean;
  isMinimized?: boolean;
}
