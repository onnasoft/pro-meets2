import { Language, Organization, User } from "@onnasoft/pro-meets-core";

export interface DashboardOutletContext {
  user: User;
  organization?: Organization;
  organizations: Organization[];
  language: Language;
}
