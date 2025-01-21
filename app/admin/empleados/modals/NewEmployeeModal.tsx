"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"; // Reemplaza con tu componente de diálogo si tienes uno
import { Button } from "@/components/ui/button";
import EmployeeForm from "../components/EmployeeForm";

interface NewEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

const NewEmployeeModal: React.FC<NewEmployeeModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registrar Nuevo Empleado</DialogTitle>
        </DialogHeader>
        <EmployeeForm
          onSubmit={(data: any) => {
            onSave(data);
            onClose();
          }}
        />
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewEmployeeModal;
