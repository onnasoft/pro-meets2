import { useRequireOrganization } from "~/hooks/require-organization";

export default function RecordingsPage() {
  useRequireOrganization();
  
  return <h1>Grabaciones del dashboard</h1>;
}
