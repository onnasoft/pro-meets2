interface TitleProps {
  readonly title: React.ReactNode;
  readonly description: React.ReactNode;
}

export default function Title({ title, description }: TitleProps) {
  return (
    <div className="pb-3 mb-3 border-b border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  );
}
