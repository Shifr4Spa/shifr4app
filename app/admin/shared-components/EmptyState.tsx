// components/EmptyState.tsx

import { UserPlus } from "lucide-react";

interface EmptyStateProps {
  onCreate: () => void;
}

export function EmptyState({ onCreate }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border border-dashed rounded-lg bg-gray-100">
      <UserPlus className="text-6xl text-gray-400 mb-4" />
      <h2 className="text-xl text-gray-700 mb-2">
        Aún no has creado un cliente
      </h2>
      <p className="text-gray-600 mb-4">
        Haz clic en el botón de abajo para agregar un nuevo cliente.
      </p>
      <button
        onClick={onCreate}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
      >
        Crear Nuevo Cliente
      </button>
    </div>
  );
}
