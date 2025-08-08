import { useState } from "react";
import JobsTable from "~/components/jobs/JobsTable";

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "Tech Corp",
      location: "Remoto",
      salary: "$3,000 - $4,000",
      type: "Tiempo completo",
      status: "Activa",
      posted: "2023-05-15",
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      company: "Creative Solutions",
      location: "Barcelona",
      salary: "$2,500 - $3,500",
      type: "Medio tiempo",
      status: "Activa",
      posted: "2023-05-10",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Data Systems",
      location: "Madrid",
      salary: "$3,500 - $4,500",
      type: "Tiempo completo",
      status: "Inactiva",
      posted: "2023-05-20",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto">
      <JobsTable
        jobs={filteredJobs}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
