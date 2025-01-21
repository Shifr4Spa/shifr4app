"use client";

import { useState, useEffect, useMemo } from "react";
import ClientTable from "./components/ClientTable";
import ClientDialog from "./components/ClientDialog";
import { deleteCustomer, getCustomers } from "./actions";
import { Customer } from "@/app/types/clients";
import { DialogDeleteConfirm } from "../shared-components/DialogDeleteConfirm";
import { EmptyState } from "../shared-components/EmptyState";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BadgePlus,
  LayoutGrid,
  List,
  Sparkle,
  Star,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserRound,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ClientPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(null);

  // Función para cargar los clientes
  const loadCustomers = async () => {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (error) {
      console.error("Error al cargar clientes:", error);
    }
  };

  useEffect(() => {
    loadCustomers();
    console.log("clients", customers);
  }, []);

  const handleEdit = (customer: Customer) => {
    setCurrentCustomer(customer);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCustomer(id);
      setIsDeleteDialogOpen(false);
      loadCustomers(); // Recargar la lista de clientes después de eliminar uno
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    }
  };

  const handleCreate = () => {
    setCurrentCustomer(null);
    setIsDialogOpen(true);
  };

  // Memorizar la lista de clientes para evitar renders innecesarios
  const memoizedCustomers = useMemo(() => customers, [customers]);

  // Cálculos de estadísticas
  const totalClients = memoizedCustomers.length;
  const newClients = memoizedCustomers.filter((client) => client.isNew).length;
  const vipClients = memoizedCustomers.filter(
    (client) => client.type === "VIP"
  ).length;
  const premiumClients = memoizedCustomers.filter(
    (client) => client.type === "Premium"
  ).length;
  const normalClients = memoizedCustomers.filter(
    (client) => client.type === "Normal"
  ).length;

  // Early return: si no hay clientes, se muestra el estado vacío
  if (memoizedCustomers.length === 0) {
    return (
      <div className="space-y-6">
        <EmptyState onCreate={handleCreate} />{" "}
        {/* Mostrar estado vacío si no hay clientes */}
      </div>
    );
  }

  const metrics = [
    {
      title: "Total Clients",
      value: 300,
      change: 19.01,
      icon: <Users className="h-4 w-4 text-pink-500" />,
      gradient: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
      title: "Active Clients",
      value: 270,
      change: 19.01,
      icon: <UserCheck className="h-4 w-4 text-emerald-500" />,
      gradient: "bg-gradient-to-r from-emerald-500 to-teal-500",
    },
    {
      title: "Inactive Clients",
      value: 30,
      change: 19.01,
      icon: <UserMinus className="h-4 w-4 text-red-500" />,
      gradient: "bg-gradient-to-r from-red-500 to-orange-500",
    },
    {
      title: "New Clients",
      value: 300,
      change: 19.01,
      icon: <UserPlus className="h-4 w-4 text-blue-500" />,
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="space-y-6">
      <ClientHeader onClick={handleCreate} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <ClientTable
        customers={memoizedCustomers}
        onEdit={handleEdit}
        onDelete={(id: number) => {
          setCurrentCustomer({ id } as Customer); // Set the customer to be deleted
          setIsDeleteDialogOpen(true); // Open the delete confirmation dialog
        }}
      />

      <ClientDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialData={currentCustomer || undefined}
        onSave={loadCustomers} // Recargar la lista de clientes después de crear o editar
      />

      <DialogDeleteConfirm
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={() => currentCustomer && handleDelete(currentCustomer.id!)}
      />
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: number;
  change: number;
  icon: React.ReactNode;
  gradient: string;
}

function MetricCard({ title, value, change, icon, gradient }: MetricCardProps) {
  return (
    <Card className={`overflow-hidden ${gradient}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/90 shadow-sm">{icon}</div>
          <div className="flex-1">
            <p className="text-xs text-white/80">{title}</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-white">{value}</p>
              <span className="text-xs font-medium text-white/90 bg-white/20 px-2 py-1 rounded-full">
                +{change}%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ClientHeader({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex items-center justify-between py-4 px-6 border-b">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Employee</span>
          <span>/</span>
          <span>Client List</span>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <div className="border rounded-md p-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Export
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Export as CSV</DropdownMenuItem>
            <DropdownMenuItem>Export as PDF</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          className="bg-[#FF5C35] hover:bg-[#FF5C35]/90"
          onClick={onClick}
        >
          Nuevo Cliente
        </Button>
      </div>
    </div>
  );
}
