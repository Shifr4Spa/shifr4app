"use client";

import React from "react";
import { Employee } from "../types/Employee";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { EllipsisVertical } from "lucide-react";

export const EmployeeRow = ({ employee }: { employee: Employee }) => {
  return (
    <tr className="hover:bg-slate-50">
      <td className="pl-5 p-5">
        <input type="checkbox" />
      </td>
      <td>{employee.id}</td>
      <td>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={employee.avatarUrl} alt={employee.name} />
            <AvatarFallback>{employee.name[0]}</AvatarFallback>
          </Avatar>
          <span>{employee.name}</span>
        </div>
      </td>
      <td>{employee.email}</td>
      <td>
        <span className="text-green-500">Activo</span>
      </td>
      <td>{employee.role}</td>
      <td>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-1">
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Ver</DropdownMenuItem>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Eliminar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
};
