import { Post, User } from "@onnasoft/pro-meets-core";
import { Chat } from "../types";

export const mockUsers: Partial<User>[] = [
  {
    id: "1",
    name: "Julio Cesar Torres",
    email: "julio.dev@example.com",
  },
  {
    id: "2",
    name: "Leonardo Torres",
    email: "leo.law@example.com",
  },
];

export const mockPosts: Post[] = [
  {
    id: "1",
    user: mockUsers[0] as User,
    content:
      "Acabo de implementar un nuevo algoritmo de matching para ProMeets. ¡Los resultados son increíbles! 🚀",
    likes: 24,
    comments: 5,
    shares: 3,
    timestamp: "2h ago",
  },
  {
    id: "2",
    user: mockUsers[1] as User,
    content:
      "He estado trabajando en una nueva funcionalidad para la gestión de eventos. ¡Pronto habrá más noticias! 🎉",
    likes: 30,
    comments: 10,
    shares: 5,
    timestamp: "1h ago",
  },
  {
    id: "3",
    user: mockUsers[0] as User,
    content:
      "Acabo de terminar un nuevo diseño para la página de inicio. ¡Estoy emocionado de compartirlo! 🎨",
    likes: 12,
    comments: 2,
    shares: 1,
    timestamp: "30m ago",
  },
  {
    id: "4",
    user: mockUsers[1] as User,
    content:
      "He estado trabajando en una nueva funcionalidad para la gestión de eventos. ¡Pronto habrá más noticias! 🎉",
    likes: 30,
    comments: 10,
    shares: 5,
    timestamp: "1h ago",
  },
  {
    id: "5",
    user: mockUsers[0] as User,
    content:
      "Acabo de implementar un nuevo algoritmo de matching para ProMeets. ¡Los resultados son increíbles! 🚀",
    likes: 24,
    comments: 5,
    shares: 3,
    timestamp: "2h ago",
  },
  {
    id: "6",
    user: mockUsers[1] as User,
    content:
      "He estado trabajando en una nueva funcionalidad para la gestión de eventos. ¡Pronto habrá más noticias! 🎉",
    likes: 30,
    comments: 10,
    shares: 5,
    timestamp: "1h ago",
  },
  {
    id: "7",
    user: mockUsers[0] as User,
    content:
      "Acabo de implementar un nuevo algoritmo de matching para ProMeets. ¡Los resultados son increíbles! 🚀",
    likes: 24,
    comments: 5,
    shares: 3,
    timestamp: "2h ago",
  }
];

export const mockChats: Chat[] = [
  {
    id: "1",
    user: mockUsers[1] as User,
    messages: [
      {
        id: "1",
        user: mockUsers[1] as User,
        content: "Hola Julio, ¿cómo va el desarrollo de la nueva feature?",
        timestamp: "10:30 AM",
      },
    ],
    unread: 0,
  },
  // ... resto de chats
];

export const currentUser: User = mockUsers[0] as User;
