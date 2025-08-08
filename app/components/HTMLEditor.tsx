import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Heading } from "@tiptap/extension-heading";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Undo2,
  Redo2,
  Trash2,
  Link2,
  Minus,
  Image,
  Paperclip,
  Loader,
} from "lucide-react";
import { useState } from "react";
import FileUploadDialog from "./FileUploadDialog";
import { createMedia } from "~/services/media";
import { useOutletContext } from "@remix-run/react";
import { DashboardOutletContext } from "~/types/dashboard";
import { ResizableImage } from 'tiptap-extension-resizable-image';
import config from "~/config";

interface ToolbarButtonProps {
  readonly onClick: () => void;
  readonly children: React.ReactNode;
  readonly isActive?: boolean;
  readonly tooltip?: string;
  readonly disabled?: boolean;
}

function ToolbarButton({
  onClick,
  children,
  isActive = false,
  tooltip = "",
  disabled = false,
}: ToolbarButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled}
      className={`p-2 rounded hover:bg-gray-100 transition-colors relative group ${
        isActive ? "bg-gray-100 text-blue-600" : "text-gray-600"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-label={tooltip}
    >
      {children}
      {tooltip && (
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {tooltip}
        </span>
      )}
    </button>
  );
}

interface HTMLEditorProps {
  readonly value?: string;
  readonly onChange?: (content: string) => void;
}

export default function HTMLEditor({ value, onChange }: HTMLEditorProps) {
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [uploadAction, setUploadAction] = useState<"image" | "file">("image");
  const { organizations } = useOutletContext<DashboardOutletContext>();
  const organizationId = organizations?.find((org) => org.current)?.id;

  const editor = useEditor({
    extensions: [
      StarterKit,
      ResizableImage.configure({
        defaultWidth: 200,
        defaultHeight: 200,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
    ],
    content: value || "<p></p>",
    immediatelyRender: false,
  });

  editor?.on("update", () => {
    onChange?.(editor.getHTML());
  });

  if (!editor) return <Loader className="animate-spin my-20 m-auto" />;

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
    }
    setShowLinkInput(false);
    setLinkUrl("");
  };

  const handleUpload = async (files: File[]) => {
    const media = await createMedia({
      file: files[0],
      alt: "",
      organizationId,
    });
    const url = config.apiUrl + media.url;
    if (uploadAction === "image") {
      editor.chain().focus().setResizableImage({ src: url }).run();
    } else if (uploadAction === "file") {
      editor.chain().focus().setLink({ href: url, target: "_blank" }).run();
    }
  };

  return (
    <div className="">
      {/* Main toolbar */}
      <div className="flex flex-wrap gap-1 mb-2 p-2 border rounded-lg bg-white shadow-sm top-0 z-10">
        {/* Text formatting */}
        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
            tooltip="Bold (Ctrl+B)"
          >
            <Bold className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
            tooltip="Italic (Ctrl+I)"
          >
            <Italic className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive("strike")}
            tooltip="Strikethrough"
          >
            <Strikethrough className="h-5 w-5" />
          </ToolbarButton>
        </div>

        {/* Headings & lists */}
        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            isActive={editor.isActive("heading", { level: 1 })}
            tooltip="Heading 1"
          >
            <Heading1 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            isActive={editor.isActive("heading", { level: 2 })}
            tooltip="Heading 2"
          >
            <Heading2 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
            tooltip="Bulleted list"
          >
            <List className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
            tooltip="Numbered list"
          >
            <ListOrdered className="h-5 w-5" />
          </ToolbarButton>
        </div>

        {/* Special elements */}
        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton
            onClick={() => setShowLinkInput(true)}
            isActive={editor.isActive("link")}
            tooltip="Insert link"
          >
            <Link2 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            tooltip="Insert separator"
          >
            <Minus className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => {
              setUploadAction("image");
              setIsOpen(true);
            }}
            tooltip="Insert image"
          >
            <Image className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => {
              setUploadAction("file");
              setIsOpen(true);
            }}
            tooltip="Attach file"
          >
            <Paperclip className="h-5 w-5" />
          </ToolbarButton>
        </div>

        {/* Undo / Redo & clear */}
        <div className="flex">
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            tooltip="Undo (Ctrl+Z)"
          >
            <Undo2 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            tooltip="Redo (Ctrl+Y)"
          >
            <Redo2 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().clearContent().run()}
            tooltip="Clear document"
          >
            <Trash2 className="h-5 w-5" />
          </ToolbarButton>
        </div>
      </div>

      {/* Link input */}
      {showLinkInput && (
        <div className="absolute z-20 mt-2 p-3 bg-white border rounded-lg shadow-lg">
          <div className="flex gap-2">
            <input
              type="text"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && addLink()}
            />
            <button
              onClick={addLink}
              className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Apply
            </button>
            <button
              onClick={() => setShowLinkInput(false)}
              className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Editor area */}
      <EditorContent
        editor={editor}
        className="min-h-[300px] border rounded-lg bg-white shadow-sm prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none"
      />

      <FileUploadDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onFileUpload={handleUpload}
        accept=".pdf,.jpg,.png"
      />
    </div>
  );
}
