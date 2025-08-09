import { Download, Folder, Share2, Star, Trash2 } from "lucide-react";
import { getFileIcon } from "./utils";
import { Document } from "~/models/Document";

interface DocumentCardProps {
  readonly item: Document;
  readonly onNavigate: (name: string) => void;
  readonly onToggleStar: (id: string) => void;
}

export default function DocumentCard({
  item,
  onNavigate,
  onToggleStar,
}: DocumentCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-150">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            {item.type === "folder" ? (
              <Folder className="h-10 w-10 text-primary-400" />
            ) : (
              getFileIcon(item.extension)
            )}
          </div>
          <button
            onClick={() => onToggleStar(item.id)}
            className="text-gray-400 hover:text-primary-400"
          >
            <Star
              className={`h-5 w-5 ${
                item.starred ? "fill-primary-400 text-primary-400" : ""
              }`}
            />
          </button>
        </div>
        <div className="mt-3">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {item.type === "folder" ? (
              <button
                onClick={() => onNavigate(item.name)}
                className="text-left hover:text-primary-600 focus:outline-none"
              >
                {item.name}
              </button>
            ) : (
              item.name
            )}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {item.size || "—"} • {item.modified}
          </p>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-2 flex justify-end space-x-2">
        <button className="text-gray-400 hover:text-gray-600">
          <Share2 className="h-4 w-4" />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <Download className="h-4 w-4" />
        </button>
        <button className="text-gray-400 hover:text-error-600">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
