import { Language } from "~/utils/language";

export type Create<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
export type Update<T> = Partial<Create<T>>;

export type Role = "admin" | "user";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  isEmailVerified: boolean;
  verificationToken: string | null;
  verificationTokenExpiresAt: string | null;
  passwordResetToken: string | null;
  passwordResetTokenExpiresAt: string | null;
  language: Language;
  role: Role;
  avatarUrl?: string;
  timezone: string;
  newsletter?: boolean;
  createdAt: string;
  updatedAt: string;
};

export interface Organization {
  id: number;
  name: string;
  description?: string | null;
  website?: string | null;
  location?: string | null;
  phone?: string | null;
  logoUrl?: string | null;
  members: OrganizationMember[];
  createdAt: string;
  updatedAt: string;
}

export interface OrganizationMember {
  id: number;
  email: string;
  role: "admin" | "member" | "guest";
  status: "pending" | "active" | "rejected";
  createdAt: string;
  updatedAt: string;
}
