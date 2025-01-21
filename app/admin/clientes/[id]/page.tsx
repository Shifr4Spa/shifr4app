"use client";

import { useRouter } from "next/navigation"; // Cambiado para Next.js 14
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import ProjectHeader from "../ProjectHeader";

export default function CustomerDetails() {
  // Interfaz de los servicios
  interface Service {
    name: string;
    date: string;
  }

  // Interfaz del cliente
  interface Customer {
    id: string;
    name: string;
    phone: string;
    email: string;
    category: "VIP" | "Nuevo" | "Normal" | "Regular" | "Premium";
    lastVisit: string;
    avatar: string;
    services: Service[]; // Servicios que ha recibido el cliente
    profile?: string; // Puedes hacerlo opcional si no todos los clientes tienen un perfil
    comments?: string; // Lo mismo para comentarios
    promotion?: string; // Lo mismo para promoción
  }

  const mockData: Customer[] = [
    {
      id: "1",
      name: "Osemide Akintan",
      phone: "#28373",
      email: "osemideakintan@gmail.com",
      category: "VIP",
      lastVisit: "12/12/2024",
      avatar: "/placeholder.svg",
      services: [
        { name: "Corte de cabello", date: "12/12/2024" },
        { name: "Masaje facial", date: "11/30/2024" },
      ],
    },
    {
      id: "2",
      name: "Maria Lopez",
      phone: "#192837",
      email: "maria.lopez@example.com",
      category: "Regular",
      lastVisit: "11/30/2024",
      avatar: "/placeholder.svg",
      services: [
        { name: "Manicure", date: "11/30/2024" },
        { name: "Corte de cabello", date: "11/28/2024" },
      ],
    },
    {
      id: "3",
      name: "John Doe",
      phone: "#384756",
      email: "johndoe123@example.com",
      category: "VIP",
      lastVisit: "11/15/2024",
      avatar: "/placeholder.svg",
      services: [
        { name: "Pedicure", date: "11/15/2024" },
        { name: "Masaje relajante", date: "11/10/2024" },
      ],
    },
    // Agregar más datos de clientes según sea necesario...
  ];

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    // In Next.js 13+ App Router, we get the ID from the URL segments
    const segments = window.location.pathname.split("/");
    const id = segments[segments.length - 1];

    if (id) {
      const foundCustomer = mockData.find((customer) => customer.id === id);
      setCustomer(foundCustomer || null);
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!customer) {
    return <div>Cliente no encontrado</div>;
  }

  return (
    <div>
      <div className="p-6 bg-white border-1 border rounded-lg">
        <h1 className="text-2xl font-semibold">{customer.name}</h1>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={customer.avatar} />
            <AvatarFallback>{customer.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p>
              <strong>Correo electrónico:</strong> {customer.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {customer.phone}
            </p>
            <p>
              <strong>Categoría:</strong> {customer.category}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Servicios</h3>
          {/* Mostrar los servicios del cliente */}
        </div>
      </div>

      <ProjectHeader
        title="eCommerce Website Design"
        status="In Progress"
        team={[
          { id: "1", name: "Team Member 1", avatar: "/placeholder.svg" },
          { id: "2", name: "Team Member 2", avatar: "/placeholder.svg" },
          { id: "3", name: "Team Member 3", avatar: "/placeholder.svg" },
          { id: "4", name: "Team Member 4", avatar: "/placeholder.svg" },
        ]}
      />
    </div>
  );
}
