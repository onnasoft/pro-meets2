import { Language } from "~/utils/language";
import { Organization, User } from "../models/Job";

export interface DashboardOutletContext {
  user: User;
  organizations: Organization[];
  language: Language;
}
