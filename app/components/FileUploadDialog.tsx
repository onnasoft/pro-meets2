import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { UploadCloud, X } from "lucide-react";
import { Fragment, useState, useCallback, ChangeEvent } from "react";

interface FileUploadDialogProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly title?: string;
  readonly description?: string;
  readonly accept?: string;
  readonly multiple?: boolean;
  readonly onFileUpload: (files: File[]) => Promise<void> | void;
  readonly uploadText?: string;
  readonly cancelText?: string;
}

export default function FileUploadDialog({
  isOpen,
  onClose,
  title = "Subir archivos",
  description = "Arrastra y suelta tus archivos aquí o haz clic para seleccionarlos",
  accept = "*",
  multiple = false,
  onFileUpload,
  uploadText = "Subir",
  cancelText = "Cancelar",
}: FileUploadDialogProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    try {
      await onFileUpload(files);
      setFiles([]);
      onClose();
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col space-y-4">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </DialogTitle>

                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center ${
                      isDragging
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <UploadCloud className="h-10 w-10 text-gray-400" />
                      <p className="text-sm text-gray-600">{description}</p>
                      <label className="cursor-pointer mt-2">
                        <span className="rounded-md bg-white px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
                          Seleccionar archivos
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept={accept}
                          multiple={multiple}
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>

                  {files.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-700">
                        Archivos seleccionados:
                      </h4>
                      <ul className="divide-y divide-gray-200 max-h-40 overflow-y-auto">
                        {files.map((file, index) => (
                          <li
                            key={index}
                            className="py-2 flex justify-between items-center"
                          >
                            <span className="text-sm text-gray-600 truncate max-w-xs">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-500"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                    disabled={isUploading}
                  >
                    {cancelText}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleUpload}
                    disabled={files.length === 0 || isUploading}
                  >
                    {isUploading ? "Subiendo..." : uploadText}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
