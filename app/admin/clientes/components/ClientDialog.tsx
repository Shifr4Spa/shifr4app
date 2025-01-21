// ClientDialog.tsx

"use client";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import ClientForm from "./ClientForm";
import { Customer } from "@/app/types/clients";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Customer;
  onSave: () => Promise<void>; // Agregar onSave aquí
}

export default function ClientDialog({
  isOpen,
  onClose,
  initialData,
  onSave,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Editar Cliente" : "Nuevo Cliente"}
          </DialogTitle>
        </DialogHeader>
        <ClientForm
          initialData={initialData}
          onClose={onClose}
          onSave={onSave}
        />
      </DialogContent>
    </Dialog>
  );
}
