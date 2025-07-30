// routes/dashboard/jobs.tsx

import { useRequireOrganization } from "~/hooks/require-organization";

export default function AnalyticsPage() {
  useRequireOrganization();

  return <h1>Analytics del dashboard</h1>;
}
