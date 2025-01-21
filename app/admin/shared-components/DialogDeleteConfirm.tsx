// components/DialogDeleteConfirm.tsx

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogDeleteConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DialogDeleteConfirm({
  isOpen,
  onClose,
  onConfirm,
}: DialogDeleteConfirmProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar Eliminación</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <p className="text-gray-700">
            ¿Estás seguro de que deseas eliminar este cliente? Esta acción no se
            puede deshacer.
          </p>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Eliminar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
