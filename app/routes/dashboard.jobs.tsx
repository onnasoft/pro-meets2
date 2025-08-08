// routes/dashboard/jobs.tsx

import { useRequireOrganization } from "~/hooks/require-organization";
import { Plus, Trash2, Edit, Save, X } from "lucide-react";
import { useState } from "react";

interface JobOffer {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  salaryRange: string;
  status: "draft" | "published" | "closed";
  createdAt: string;
  updatedAt: string;
}

interface JobOfferFormProps {
  offer?: JobOffer;
  onSave: (offer: JobOffer) => void;
  onCancel: () => void;
}

const JobOfferForm = ({ offer, onSave, onCancel }: JobOfferFormProps) => {
  const [formData, setFormData] = useState<
    Omit<JobOffer, "id" | "createdAt" | "updatedAt">
  >({
    title: offer?.title || "",
    description: offer?.description || "",
    requirements: offer?.requirements || [""],
    salaryRange: offer?.salaryRange || "",
    status: offer?.status || "draft",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequirementChange = (index: number, value: string) => {
    const newRequirements = [...formData.requirements];
    newRequirements[index] = value;
    setFormData((prev) => ({ ...prev, requirements: newRequirements }));
  };

  const addRequirement = () => {
    setFormData((prev) => ({
      ...prev,
      requirements: [...prev.requirements, ""],
    }));
  };

  const removeRequirement = (index: number) => {
    const newRequirements = formData.requirements.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, requirements: newRequirements }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: offer?.id || crypto.randomUUID(),
      createdAt: offer?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Título
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Requisitos
        </label>
        {formData.requirements.map((req, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={req}
              onChange={(e) => handleRequirementChange(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
            <button
              type="button"
              onClick={() => removeRequirement(index)}
              className="ml-2 p-2 text-red-500 hover:text-red-700"
              disabled={formData.requirements.length <= 1}
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addRequirement}
          className="mt-2 flex items-center text-sm text-primary-600 hover:text-primary-800"
        >
          <Plus size={16} className="mr-1" />
          Agregar requisito
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rango salarial
        </label>
        <input
          type="text"
          name="salaryRange"
          value={formData.salaryRange}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Estado
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="draft">Borrador</option>
          <option value="published">Publicado</option>
          <option value="closed">Cerrado</option>
        </select>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Guardar oferta
        </button>
      </div>
    </form>
  );
};

const JobOfferItem = ({
  offer,
  onEdit,
  onDelete,
}: {
  offer: JobOffer;
  onEdit: () => void;
  onDelete: () => void;
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{offer.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{offer.salaryRange}</p>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
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
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="p-2 text-primary-600 hover:text-primary-800"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={onDelete}
            className="p-2 text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600">{offer.description}</p>
      </div>
      {offer.requirements.length > 0 && (
        <div className="mt-3">
          <h4 className="text-sm font-medium text-gray-700 mb-1">
            Requisitos:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {offer.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-3 text-xs text-gray-500">
        <p>Actualizado: {new Date(offer.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

const JobOffersCRUD = () => {
  useRequireOrganization();
  const [offers, setOffers] = useState<JobOffer[]>([]);
  const [editingOffer, setEditingOffer] = useState<JobOffer | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = (offer: JobOffer) => {
    setOffers((prev) => [...prev, offer]);
    setIsCreating(false);
  };

  const handleUpdate = (updatedOffer: JobOffer) => {
    setOffers((prev) =>
      prev.map((o) => (o.id === updatedOffer.id ? updatedOffer : o))
    );
    setEditingOffer(null);
  };

  const handleDelete = (id: string) => {
    setOffers((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Gestión de Ofertas Laborales
        </h2>
        <button
          onClick={() => {
            setEditingOffer(null);
            setIsCreating(true);
          }}
          className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus size={18} className="mr-1" />
          Crear oferta
        </button>
      </div>

      {isCreating && (
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Nueva Oferta Laboral
          </h3>
          <JobOfferForm
            onSave={handleCreate}
            onCancel={() => setIsCreating(false)}
          />
        </div>
      )}

      {editingOffer && (
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Editar Oferta Laboral
          </h3>
          <JobOfferForm
            offer={editingOffer}
            onSave={handleUpdate}
            onCancel={() => setEditingOffer(null)}
          />
        </div>
      )}

      <div className="space-y-4">
        {offers.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No hay ofertas laborales creadas</p>
          </div>
        ) : (
          offers.map((offer) => (
            <JobOfferItem
              key={offer.id}
              offer={offer}
              onEdit={() => {
                setIsCreating(false);
                setEditingOffer(offer);
              }}
              onDelete={() => {
                if (confirm("¿Estás seguro de eliminar esta oferta?")) {
                  handleDelete(offer.id);
                }
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default JobOffersCRUD;
