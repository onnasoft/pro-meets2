import { useState } from "react";
import JobsTable from "~/components/jobs/JobsTable";
import { useJobs } from "~/hooks/jobs";

export default function JobsPage() {
  const { data: jobs = [] } = useJobs({
    relations: ["project"],
  });

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="mx-auto">
      <JobsTable
        jobs={jobs}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
