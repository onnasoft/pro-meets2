import { Organization } from "~/models/Organization";
import { User } from "~/models/User";
import { Language } from "~/utils/language";

export interface DashboardOutletContext {
  user: User;
  organizations: Organization[];
  language: Language;
}
