"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Search, Filter, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const EmployeeFilters = ({ button }: any) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Buscar empleado"
          className="w-48 pl-10"
        />
        <Search className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">
            <Filter className="mr-2 h-4 w-4 text-gray-500" />
            Filtrar
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem>Todos</DropdownMenuItem>
          <DropdownMenuItem>Recepcionista</DropdownMenuItem>
          <DropdownMenuItem>Masajista</DropdownMenuItem>
          <DropdownMenuItem>Esteticista</DropdownMenuItem>
          <DropdownMenuItem>Gerente</DropdownMenuItem>
          <DropdownMenuItem>Especialista en bienestar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {button}
    </div>
  );
};
