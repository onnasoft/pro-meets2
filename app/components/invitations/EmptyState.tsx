import { ReactNode } from "react";

interface EmptyStateProps {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="text-center bg-white rounded-lg shadow-sm p-12">
      <div className="mx-auto h-12 w-12 text-gray-400">{icon}</div>
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
}
