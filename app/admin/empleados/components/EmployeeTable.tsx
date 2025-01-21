"use client";

import React from "react";
import { Employee } from "../types/Employee";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmployeeRow } from "./EmployeeRow";

export const EmployeeTable = ({ employees }: { employees: Employee[] }) => {
  return (
    <Table>
      <TableHeader className="bg-[#F9FAFB]">
        <TableRow>
          <TableHead className="pl-5">
            <input type="checkbox" />
          </TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </TableBody>
    </Table>
  );
};
