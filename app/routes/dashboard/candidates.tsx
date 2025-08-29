import { useRequireOrganization } from "~/hooks/require-organization";

export default function CandidatesPage() {
  useRequireOrganization();
  
  return <h1>Candidatos del dashboard</h1>;
}
