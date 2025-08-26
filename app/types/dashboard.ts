import { Language, Organization, User } from "pro-meets-core";

export interface DashboardOutletContext {
  user: User;
  organization?: Organization;
  organizations: Organization[];
  language: Language;
}
