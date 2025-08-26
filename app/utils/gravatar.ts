import { User } from "pro-meets-core";

export function getAvatarUrl(user: User, size: number = 200): string {
  if (user.avatarUrl) {
    return user.avatarUrl;
  }

  if (!user?.email) {
    return `https://www.gravatar.com/avatar/?s=${size}&d=identicon`;
  }

  const hash = user.email.trim().toLowerCase();
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
}
