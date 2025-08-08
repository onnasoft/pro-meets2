import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Loader } from "lucide-react";
import { ResizableImage } from "tiptap-extension-resizable-image";

interface HTMLViewProps {
  readonly value?: string;
}

export default function HTMLView({ value }: HTMLViewProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      ResizableImage.configure({
        defaultWidth: 200,
        defaultHeight: 200,
      }),
    ],
    content: value || "<p></p>",
    immediatelyRender: false,
    editable: false,
  });

  if (!editor) return <Loader className="animate-spin my-20 m-auto" />;

  return (
    <div className="html-view">
      <EditorContent editor={editor} className="bg-white" />
    </div>
  );
}
