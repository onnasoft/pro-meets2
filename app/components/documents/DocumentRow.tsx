import { Download, Folder, Share2, Star, Trash2 } from "lucide-react";
import { getFileIcon } from "./utils";
import { Document } from "@onnasoft/pro-meets-core";

interface DocumentRowProps {
  readonly item: Document;
  readonly onNavigate: (name: string) => void;
  readonly onToggleStar: (id: string) => void;
}

export default function DocumentRow({
  item,
  onNavigate,
  onToggleStar,
}: DocumentRowProps) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="shrink-0 h-10 w-10 flex items-center">
            {item.type === "folder" ? (
              <Folder className="h-8 w-8 text-primary-400" />
            ) : (
              getFileIcon(item.extension)
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {item.type === "folder" ? (
                <button
                  onClick={() => onNavigate(item.name)}
                  className="hover:text-primary-600 focus:outline-hidden text-left"
                >
                  {item.name}
                </button>
              ) : (
                item.name
              )}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.size || "—"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.modified}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
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
        <button className="text-gray-400 hover:text-gray-600">
          <Share2 className="h-5 w-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <Download className="h-5 w-5" />
        </button>
        <button className="text-gray-400 hover:text-error-600">
          <Trash2 className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
}
