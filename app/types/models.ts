import { PaymentMethod as SPaymentMethod } from "@stripe/stripe-js";
import { Language } from "~/utils/language";

export type Op =
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "like"
  | "ilike"
  | "in"
  | "notIn"
  | "between";

export type Condition = {
  value: any;
  op?: Op;
};

type ExcludedKeys = "id" | "createdAt" | "updatedAt" | "deletedAt";

type IsColumnValue<T> = T extends Date | null
  ? true
  : T extends object
  ? false
  : true;

type ColumnKeys<T> = {
  [K in keyof T]-?: IsColumnValue<T[K]> extends true ? K : never;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];

type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>;

export type Create<T> = Omit<
  Pick<T, Extract<ColumnKeys<T>, RequiredKeys<T>>> &
    Partial<Pick<T, Extract<ColumnKeys<T>, OptionalKeys<T>>>>,
  ExcludedKeys
>;

export type Update<T> = Partial<Create<T>>;
export type FindOneOptions<T> = {
  select?: Partial<Record<keyof T, boolean>>;
  where?: Partial<Record<keyof T, Condition>>;
  relations?: string[];
};
export type FindManyOptions<T> = FindOneOptions<T> & {
  orderBy?: Array<Record<keyof T, "asc" | "desc">>;
  take?: number;
  skip?: number;
};

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
  logoSrc?: string | null;
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
