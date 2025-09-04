
interface HTMLViewProps {
  readonly value?: string;
}

const HTMLView = ({ value }: HTMLViewProps) => (
  <div
    className="html-view"
    dangerouslySetInnerHTML={{ __html: value ?? "" }}
  />
);

export default HTMLView;
