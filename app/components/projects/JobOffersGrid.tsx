import { useState } from "react";
import { Plus, Trash2, Edit } from "lucide-react";

interface JobOffer {
  id: string;
  title: string;
  company: string;
  salary: string;
  status: "draft" | "published" | "closed";
  applicants: number;
  location?: string;
  description?: string;
}

export const JobOffersGrid = () => {
  // Datos de ejemplo
  const [offers, setOffers] = useState<JobOffer[]>([
    {
      id: "1",
      title: "Desarrollador Frontend",
      company: "Tech Corp",
      salary: "$3,000 - $4,000",
      status: "published",
      applicants: 24,
      location: "Remoto",
      description: "Buscamos desarrollador con experiencia en React y TypeScript"
    },
    {
      id: "2",
      title: "Diseñador UX/UI",
      company: "Creative Solutions",
      salary: "$2,800 - $3,500",
      status: "draft",
      applicants: 8,
      location: "Barcelona",
      description: "Diseño de interfaces para aplicaciones móviles"
    },
    {
      id: "3",
      title: "Backend Engineer",
      company: "Data Systems",
      salary: "$3,500 - $4,500",
      status: "published",
      applicants: 15,
      location: "Madrid",
      description: "Desarrollo de APIs con Node.js y MongoDB"
    }
  ]);

  // Funciones CRUD
  const handleDelete = (id: string) => {
    setOffers(offers.filter((offer) => offer.id !== id));
  };

  const handleAdd = () => {
    const newOffer: JobOffer = {
      id: (offers.length + 1).toString(),
      title: "Nueva Oferta",
      company: "Empresa",
      salary: "$0 - $0",
      status: "draft",
      applicants: 0,
      description: "Descripción del puesto"
    };
    setOffers([...offers, newOffer]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 space-y-6">
      {/* Header con botón de agregar */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Ofertas Laborales</h2>
        <button 
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={16} />
          Nueva Oferta
        </button>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="border border-gray-200 rounded-lg p-5 shadow-xs hover:shadow-md transition-all duration-200"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{offer.title}</h3>
                <p className="text-gray-600">{offer.company}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  offer.status === "published"
                    ? "bg-green-100 text-green-800"
                    : offer.status === "closed"
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {offer.status === "published" 
                  ? "Publicado" 
                  : offer.status === "closed" 
                  ? "Cerrado" 
                  : "Borrador"}
              </span>
            </div>

            {/* Ubicación */}
            {offer.location && (
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {offer.location}
              </div>
            )}

            {/* Descripción */}
            {offer.description && (
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {offer.description}
              </p>
            )}

            {/* Detalles */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Salario</span>
                <span className="font-medium text-gray-700">{offer.salary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Postulantes</span>
                <span className="font-medium text-gray-700">{offer.applicants}</span>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex justify-end space-x-2 border-t pt-3">
              <button
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                onClick={() => console.log("Editar", offer.id)}
              >
                <Edit size={18} />
              </button>
              <button
                className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                onClick={() => handleDelete(offer.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};