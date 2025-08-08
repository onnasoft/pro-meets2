import { PaymentMethod as SPaymentMethod } from "@stripe/stripe-js";
import { Language } from "~/utils/language";

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
  user: User | null;
  userId: string | null;
  status: MemberStatus;
  organizationId: string;
  organization?: Organization;
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
  OWNER = "owner",
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

export enum ProjectStatus {
  PLANNING = "planning",
  IN_PROGRESS = "in_progress",
  ON_HOLD = "on_hold",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface Project {
  id: string;
  name: string;
  description?: string | null;
  organizationId: string;
  organization?: Organization;
  owner: User;
  website?: string | null;
  location?: string | null;
  phone?: string | null;
  logoUrl?: string | null;
  leaderId: string;
  leader?: User;
  status: ProjectStatus;
  startDate?: string;
  openPositions: number;
  totalPositions: number;
  progress: number;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Document {
  id: string;
  name: string;
  type: "folder" | "file";
  size?: string;
  modified: string;
  starred?: boolean;
  extension?: string;
}

export interface Media {
  id: string;
  filename: string;
  mimetype: string;
  size: number;
  url: string;
  alt?: string;
  organizationId?: string;
  createdAt: string;
  updatedAt: string;
}
