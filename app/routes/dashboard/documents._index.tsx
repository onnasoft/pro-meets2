import { useNavigate, useOutletContext } from "react-router";
import { Plus, Search, Grid, List } from "lucide-react";
import { useState } from "react";
import DocumentCard from "~/components/documents/DocumentCard";
import DocumentRow from "~/components/documents/DocumentRow";
import translations from "~/components/documents/translations";
import { DashboardOutletContext } from "~/types/dashboard";
import { Document } from "@onnasoft/pro-meets-core";

export default function DocumentsPage() {
  const { language } = useOutletContext<DashboardOutletContext>();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPath, setCurrentPath] = useState<string>(
    translations[language]?.home || "Home"
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [documents, setDocuments] = useState<Document[]>([]);
  const navigate = useNavigate();

  const t = translations[language] || translations.en;

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateToFolder = (folderName: string) => {
    setCurrentPath((prev) => `${prev} > ${folderName}`);
  };

  const toggleStar = (id: string) => {
    setDocuments((docs) =>
      docs.map((doc) =>
        doc.id === id ? { ...doc, starred: !doc.starred } : doc
      )
    );
  };

  const handleNewDocument = () => {
    navigate("/dashboard/documents/new");
  };

  return (
    <div className="bg-white rounded-lg shadow-xs border border-gray-200 h-full flex flex-col">
      {/* Toolbar */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="flex space-x-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid"
                  ? "bg-gray-100 text-primary-600"
                  : "text-gray-500"
              }`}
              title={t.gridView}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${
                viewMode === "list"
                  ? "bg-gray-100 text-primary-600"
                  : "text-gray-500"
              }`}
              title={t.listView}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleNewDocument}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-xs text-white bg-primary-600 hover:bg-primary-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Plus className="-ml-1 mr-1 h-5 w-5" />
              {t.create}
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
        {currentPath}
      </div>

      {/* Contenido */}
      <div className="flex-1 overflow-auto p-4">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredDocs.map((doc) => (
              <DocumentCard
                key={doc.id}
                item={doc}
                onNavigate={navigateToFolder}
                onToggleStar={toggleStar}
              />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.name}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.size}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.modified}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.actions}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocs.map((doc) => (
                  <DocumentRow
                    key={doc.id}
                    item={doc}
                    onNavigate={navigateToFolder}
                    onToggleStar={toggleStar}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
