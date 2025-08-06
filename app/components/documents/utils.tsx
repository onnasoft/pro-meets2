import { File } from "lucide-react";

export const getFileIcon = (extension?: string) => {
  const iconClass = "h-5 w-5 text-gray-500";
  switch (extension) {
    case "pdf":
      return <File className={`${iconClass} text-red-500 h-10 w-10`} />;
    case "doc":
    case "docx":
      return <File className={`${iconClass} text-blue-500 h-10 w-10`} />;
    case "ppt":
    case "pptx":
      return <File className={`${iconClass} text-orange-500 h-10 w-10`} />;
    case "xls":
    case "xlsx":
      return <File className={`${iconClass} text-green-500 h-10 w-10`} />;
    default:
      return <File className={`${iconClass} h-10 w-10`} />;
  }
};
