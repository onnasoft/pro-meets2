// app/routes/jobs.jsx
import { useState } from "react";

export default function JobsPage() {
  // Estado para las ofertas laborales
  const [jobs, setJobs] = useState([
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
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar trabajos basado en el término de búsqueda
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Componente de Tabla
  const JobsTable = () => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          Ofertas Laborales
        </h2>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar ofertas..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Nueva Oferta
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Puesto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Empresa
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ubicación
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Salario
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tipo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Estado
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredJobs.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  No se encontraron ofertas laborales
                </td>
              </tr>
            ) : (
              filteredJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{job.title}</div>
                    <div className="text-sm text-gray-500">{job.posted}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {job.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {job.salary}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        job.status === "Activa"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      Editar
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Mostrando <span className="font-medium">1</span> a{" "}
          <span className="font-medium">{filteredJobs.length}</span> de{" "}
          <span className="font-medium">{filteredJobs.length}</span> resultados
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Anterior
          </button>
          <button className="px-3 py-1 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto">
      <JobsTable />
    </div>
  );
}
