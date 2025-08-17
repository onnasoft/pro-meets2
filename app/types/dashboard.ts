import { Organization } from "~/models/Organization";
import { User } from "~/models/User";
import { Language } from "~/utils/language";

export interface DashboardOutletContext {
  user: User;
  organization?: Organization;
  organizations: Organization[];
  language: Language;
}
