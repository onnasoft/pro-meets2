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
} from "lucide-react";
import { useState } from "react";

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

export default function HTMLEditor() {
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
    ],
    content: "<p>Empieza a escribir tu contenido aquí...</p>",
    immediatelyRender: false,
  });

  if (!editor) return <div className="p-4">Cargando editor...</div>;

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
    }
    setShowLinkInput(false);
    setLinkUrl("");
  };

  return (
    <div className="">
      {/* Barra de herramientas principal */}
      <div className="flex flex-wrap gap-1 mb-2 p-2 border rounded-lg bg-white shadow-sm sticky top-0 z-10">
        {/* Formato de texto */}
        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
            tooltip="Negrita (Ctrl+B)"
          >
            <Bold className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
            tooltip="Cursiva (Ctrl+I)"
          >
            <Italic className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive("strike")}
            tooltip="Tachado"
          >
            <Strikethrough className="h-5 w-5" />
          </ToolbarButton>
        </div>

        {/* Encabezados y listas */}
        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            isActive={editor.isActive("heading", { level: 1 })}
            tooltip="Título 1"
          >
            <Heading1 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            isActive={editor.isActive("heading", { level: 2 })}
            tooltip="Título 2"
          >
            <Heading2 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
            tooltip="Lista con viñetas"
          >
            <List className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
            tooltip="Lista numerada"
          >
            <ListOrdered className="h-5 w-5" />
          </ToolbarButton>
        </div>

        {/* Elementos especiales */}
        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton
            onClick={() => setShowLinkInput(true)}
            isActive={editor.isActive("link")}
            tooltip="Insertar enlace"
          >
            <Link2 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            tooltip="Insertar separador"
          >
            <Minus className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => {
              /* Lógica para subir imagen */
            }}
            tooltip="Insertar imagen"
          >
            <Image className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => {
              /* Lógica para adjuntar archivo */
            }}
            tooltip="Adjuntar archivo"
          >
            <Paperclip className="h-5 w-5" />
          </ToolbarButton>
        </div>

        {/* Historial y limpieza */}
        <div className="flex">
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            tooltip="Deshacer (Ctrl+Z)"
          >
            <Undo2 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            tooltip="Rehacer (Ctrl+Y)"
          >
            <Redo2 className="h-5 w-5" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().clearContent().run()}
            tooltip="Limpiar documento"
          >
            <Trash2 className="h-5 w-5" />
          </ToolbarButton>
        </div>
      </div>

      {/* Input para enlaces */}
      {showLinkInput && (
        <div className="absolute z-20 mt-2 p-3 bg-white border rounded-lg shadow-lg">
          <div className="flex gap-2">
            <input
              type="text"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://ejemplo.com"
              className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && addLink()}
            />
            <button
              onClick={addLink}
              className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Aplicar
            </button>
            <button
              onClick={() => setShowLinkInput(false)}
              className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Área del editor */}
      <EditorContent
        editor={editor}
        className="min-h-[300px] border rounded-lg bg-white shadow-sm prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none"
      />
    </div>
  );
}
