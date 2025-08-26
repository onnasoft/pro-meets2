
interface HTMLViewProps {
  readonly value?: string;
}

export default function HTMLView({ value }: HTMLViewProps) {
  return (
    <div className="html-view">
      <div className="ProseMirror" dangerouslySetInnerHTML={{ __html: value ?? "" }} />
    </div>
  );
}
