import { Language } from "~/utils/language";
import { Organization, User } from "./models";

export interface DashboardOutletContext {
  user: User;
  organizations: Organization[];
  language: Language;
}
