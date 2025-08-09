import { Organization } from "./Organization";
import { User } from "./User";

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
