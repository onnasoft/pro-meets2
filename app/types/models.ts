export type Create<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
export type Update<T> = Partial<Create<T>>;

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
