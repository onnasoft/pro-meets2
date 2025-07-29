import { PaymentMethod as SPaymentMethod } from "@stripe/stripe-js";
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
  stripeCustomerId: string;
  defaultPaymentMethodId?: string | null;
  timezone: string;
  newsletter?: boolean;
  createdAt: string;
  updatedAt: string;
};

export interface Organization {
  id: string;
  name: string;
  description?: string | null;
  website?: string | null;
  location?: string | null;
  phone?: string | null;
  logoUrl?: string | null;
  members: OrganizationMember[];
  current: boolean;
  plan: OrganizationPlan;
  status: OrganizationStatus;
  ownerId: string;
  owner: User;
  billingEmail?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface OrganizationMember {
  id: string;
  email: string;
  role: MemberRole;
  status: MemberStatus;
  createdAt: string;
  updatedAt: string;
}

export enum OrganizationPlan {
  FREE = "free",
  PRO = "pro",
  ENTERPRISE = "enterprise",
}

export enum OrganizationStatus {
  ACTIVE = "active",
  SUSPENDED = "suspended",
  DELETED = "deleted",
}

export enum MemberRole {
  ADMIN = "admin",
  MEMBER = "member",
  GUEST = "guest",
}

export enum MemberStatus {
  PENDING = "pending",
  ACTIVE = "active",
  REJECTED = "rejected",
}

export type PaymentMethod = SPaymentMethod & {
  isDefault: boolean;
};
