// ClientForm.tsx

"use client";

import { useState } from "react";
import { saveCustomer } from "../actions";
import { Customer } from "@/app/types/clients";

interface Props {
  initialData?: Customer;
  onClose: () => void;
  onSave: () => Promise<void>; // Agregar la propiedad onSave
}

export default function ClientForm({ initialData, onClose, onSave }: Props) {
  const [formData, setFormData] = useState<Partial<Customer>>(
    initialData || {}
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await saveCustomer(formData);
      await onSave(); // Llamar a la función onSave después de guardar
      onClose(); // Cierra el modal después de guardar
    } catch (error) {
      console.error("Error al guardar cliente:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          className="w-full p-2 border rounded"
          placeholder="Nombre"
          value={formData.first_name || ""}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Apellido
        </label>
        <input
          className="w-full p-2 border rounded"
          placeholder="Apellido"
          value={formData.last_name || ""}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          placeholder="Email"
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Teléfono
        </label>
        <input
          className="w-full p-2 border rounded"
          placeholder="Teléfono"
          value={formData.phone || ""}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}
