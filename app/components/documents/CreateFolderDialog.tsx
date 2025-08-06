import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface CreateFolderDialogProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onCreate: (folderName: string) => void;
  readonly title?: string;
  readonly inputLabel?: string;
  readonly placeholder?: string;
  readonly confirmText?: string;
  readonly cancelText?: string;
}

export default function CreateFolderDialog({
  isOpen,
  onClose,
  onCreate,
  title = "Create New Folder",
  inputLabel = "Folder Name",
  placeholder = "Enter folder name",
  confirmText = "Create",
  cancelText = "Cancel",
}: CreateFolderDialogProps) {
  const [folderName, setFolderName] = useState("");

  const handleCreate = () => {
    if (folderName.trim()) {
      onCreate(folderName);
      setFolderName("");
      onClose();
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
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FolderPlus
                      className="h-10 w-10 text-primary-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <DialogTitle
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </DialogTitle>
                    <div className="mt-2">
                      <label
                        htmlFor="folderName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {inputLabel}
                      </label>
                      <input
                        type="text"
                        id="folderName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        placeholder={placeholder}
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleCreate();
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    {cancelText}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50"
                    onClick={handleCreate}
                    disabled={!folderName.trim()}
                  >
                    {confirmText}
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
