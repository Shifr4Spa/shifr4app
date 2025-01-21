"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Filter, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CreditCard, DollarSign, Wallet } from "lucide-react"; // Para los íconos de los métodos de pago

interface Appointment {
  id: string;
  clientName: string;
  clientInitials: string;
  appointmentDate: string;
  paymentMethod: "Efectivo" | "Tarjeta" | "Transferencia";
  clientCategory: "VIP" | "Nuevo" | "Normal" | "Regular" | "Premium";
  serviceType: string;
  status: "Pendiente" | "Completada" | "Cancelada";
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    clientName: "Laura Gómez",
    clientInitials: "LG",
    appointmentDate: "12/12/2024",
    paymentMethod: "Tarjeta",
    clientCategory: "VIP",
    serviceType: "Consulta General",
    status: "Pendiente",
  },
  {
    id: "2",
    clientName: "Carlos Ruiz",
    clientInitials: "CR",
    appointmentDate: "12/10/2024",
    paymentMethod: "Efectivo",
    clientCategory: "Regular",
    serviceType: "Limpieza Dental",
    status: "Completada",
  },
  {
    id: "3",
    clientName: "Ana Torres",
    clientInitials: "AT",
    appointmentDate: "12/11/2024",
    paymentMethod: "Transferencia",
    clientCategory: "Premium",
    serviceType: "Ortodoncia",
    status: "Pendiente",
  },
  {
    id: "4",
    clientName: "Diego Pérez",
    clientInitials: "DP",
    appointmentDate: "12/08/2024",
    paymentMethod: "Efectivo",
    clientCategory: "Normal",
    serviceType: "Implante Dental",
    status: "Cancelada",
  },
  {
    id: "5",
    clientName: "María Fernández",
    clientInitials: "MF",
    appointmentDate: "12/09/2024",
    paymentMethod: "Tarjeta",
    clientCategory: "VIP",
    serviceType: "Consulta General",
    status: "Completada",
  },
  {
    id: "6",
    clientName: "Luis Martínez",
    clientInitials: "LM",
    appointmentDate: "12/07/2024",
    paymentMethod: "Transferencia",
    clientCategory: "Nuevo",
    serviceType: "Blanqueamiento",
    status: "Pendiente",
  },
  {
    id: "7",
    clientName: "Sofía Sánchez",
    clientInitials: "SS",
    appointmentDate: "12/06/2024",
    paymentMethod: "Efectivo",
    clientCategory: "Regular",
    serviceType: "Ortodoncia",
    status: "Pendiente",
  },
  {
    id: "8",
    clientName: "Andrés López",
    clientInitials: "AL",
    appointmentDate: "12/05/2024",
    paymentMethod: "Tarjeta",
    clientCategory: "Premium",
    serviceType: "Limpieza Dental",
    status: "Completada",
  },
];

export default function DataTableCitas() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const getStatusBadge = (status: Appointment["status"]) => {
    switch (status) {
      case "Pendiente":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>
        );
      case "Completada":
        return (
          <Badge className="bg-green-100 text-green-800">Completada</Badge>
        );
      case "Cancelada":
        return <Badge className="bg-red-100 text-red-800">Cancelada</Badge>;
    }
  };

  const getPaymentMethodIcon = (
    paymentMethod: Appointment["paymentMethod"]
  ) => {
    switch (paymentMethod) {
      case "Efectivo":
        return <DollarSign className="mr-2" />;
      case "Tarjeta":
        return <CreditCard className="mr-2" />;
      case "Transferencia":
        return <Wallet className="mr-2" />;
    }
  };

  return (
    <div>
      <div className="p-6 bg-white border-0">
        <div className="flex justify-between items-center mb-6 gap-4">
          <Input placeholder="Buscar cliente" className="max-w-xs" />
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="border rounded-lg bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Método de Pago</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Servicio</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAppointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar>
                        <AvatarFallback>
                          {appointment.clientInitials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="ml-2">{appointment.clientName}</span>
                    </div>
                  </TableCell>
                  <TableCell>{appointment.appointmentDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {getPaymentMethodIcon(appointment.paymentMethod)}
                      {appointment.paymentMethod}
                    </div>
                  </TableCell>
                  <TableCell>{appointment.clientCategory}</TableCell>
                  <TableCell>{appointment.serviceType}</TableCell>
                  <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">Página 1 de 1</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="default" size="icon" className="w-8 h-8">
              1
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
