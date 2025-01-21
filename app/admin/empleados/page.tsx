"use client";

import React, { useState } from "react";
import { Employee } from "./types/Employee";
import { EmployeeFilters } from "./components/EmployeeFilters";
import { EmployeeTable } from "./components/EmployeeTable";
import { PaginationControls } from "./components/PaginationControls";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import NewEmployeeModal from "./modals/NewEmployeeModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Empleados() {
  const employeeData: Employee[] = [
    {
      id: 1,
      name: "Ana García",
      role: "Recepcionista",
      email: "ana@shifraspa.com",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Luis Pérez",
      role: "Masajista",
      email: "luis@shifraspa.com",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Marta López",
      role: "Esteticista",
      email: "marta@shifraspa.com",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Carlos Ramírez",
      role: "Gerente",
      email: "carlos@shifraspa.com",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      name: "Sofía Torres",
      role: "Especialista en bienestar",
      email: "sofia@shifraspa.com",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(employeeData.length / pageSize);

  const paginatedData = employeeData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [employees, setEmployees] = useState<Employee[]>([
    // Datos iniciales
    {
      id: 1,
      name: "Ana García",
      role: "Recepcionista",
      email: "ana@shifraspa.com",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
  ]);

  const handleAddEmployee = (data: Employee) => {
    setEmployees((prev) => [...prev, { ...data, id: prev.length + 1 }]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold font-inter">Gestión de Empleados</h1>
      <Card className="mt-5">
        <CardHeader>
          <EmployeeFilters
            button={
              <Button
                className="ml-4 flex items-center font-inter"
                onClick={() => setIsModalOpen(true)}
                variant={"custom"}
              >
                <Plus className="mr-2 h-5 w-5" /> Nuevo Empleado
              </Button>
            }
          />
        </CardHeader>
        <CardContent className="p-0 border-t-[#e2e8f0] border-t-[1px]">
          <EmployeeTable employees={paginatedData} />
          <NewEmployeeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddEmployee}
          />
        </CardContent>
        <CardFooter className="bg-white border-t border-gray-200 p-4">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
