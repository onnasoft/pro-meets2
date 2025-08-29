import { useRequireOrganization } from "~/hooks/require-organization";

export default function MeetingsPage() {
  useRequireOrganization();

  return <h1>Reuniones del dashboard</h1>;
}
