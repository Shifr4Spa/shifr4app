"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EmployeeFormProps {
  onSubmit: (data: any) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    avatarUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", role: "", email: "", avatarUrl: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Nombre del Empleado"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="role"
        placeholder="Cargo"
        value={formData.role}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="url"
        name="avatarUrl"
        placeholder="URL del Avatar"
        value={formData.avatarUrl}
        onChange={handleChange}
      />
      <Button type="submit" className="w-full">
        Registrar
      </Button>
    </form>
  );
};

export default EmployeeForm;
