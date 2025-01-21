import { Customer } from "@/app/types/clients";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MoreVertical } from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
  onDelete: (id: number) => void;
}

export default function ClientTable({ customers, onEdit, onDelete }: Props) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Cambia el estado cuando el componente se monta en el cliente
  }, []);

  const handleViewDetails = () => {
    if (isClient && router) {
      router.push("/admin/clientes/detalle");
    }
  };

  return (
    <div className="overflow-x-auto shadow-sm rounded-sm border border-[#dfe1e4]">
      <Table className="table-auto w-full text-left text-sm">
        <TableHeader className="!bg-[#f7f9ff]">
          <TableRow>
            <TableHead className="px-6 py-3 text-[#6d6d6d] font-roboto font-bold">
              Nombre
            </TableHead>
            <TableHead className="px-6 py-3 text-[#161718] font-roboto font-bold">
              Email
            </TableHead>
            <TableHead className="px-6 py-3 text-[#161718] font-roboto font-bold">
              Teléfono
            </TableHead>
            <TableHead className="px-6 py-3 text-[#161718] font-roboto font-bold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers?.map((customer) => (
            <TableRow
              key={customer.id}
              className="hover:bg-[#f7f9ff] transition duration-300"
            >
              <TableCell className="px-6 py-1">
                {customer.first_name} {customer.last_name}
              </TableCell>
              <TableCell className="px-6 py-1">{customer.email}</TableCell>
              <TableCell className="px-6 py-1">{customer.phone}</TableCell>
              <TableCell className="px-6 py-1 flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleViewDetails}>
                      Ver detalles
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEdit(customer)}>
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => onDelete(customer.id!)}
                    >
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
  );
}
