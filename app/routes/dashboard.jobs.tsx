// routes/dashboard/jobs.tsx

import { useRequireOrganization } from "~/hooks/require-organization";

export default function JobsPage() {
  useRequireOrganization();

  return <h1>Jobs del dashboard</h1>;
}
