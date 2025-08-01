interface TitleProps {
  readonly title: React.ReactNode;
  readonly description: React.ReactNode;
  readonly children?: React.ReactNode;
}

export default function Title({ title, description, children }: TitleProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      {children}
    </div>
  );
}
