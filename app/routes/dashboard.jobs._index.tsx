import { useState } from "react";
import { useNavigate } from "react-router";
import JobsTable from "~/components/jobs/JobsTable";
import { useJobs } from "~/hooks/jobs";
import { Job } from "~/models/Job";

export default function JobsPage() {
  const { data: jobs = [] } = useJobs({
    relations: ["project"],
  });
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleNewJob = () => {
    navigate("/dashboard/jobs/new");
  };

  const handleEditJob = (job: Job) => {
    navigate(`/dashboard/jobs/${job.id}`);
  };

  const handleDeleteJob = (job: Job) => {
    alert(`Delete job: ${job.title}`);
  };

  return (
    <div className="mx-auto">
      <JobsTable
        jobs={jobs}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onNewJob={handleNewJob}
        onEditJob={handleEditJob}
        onDeleteJob={handleDeleteJob}
      />
    </div>
  );
}
