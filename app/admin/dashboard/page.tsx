"use client";

import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Calendar,
  XCircle,
  UserPlus,
  DollarSign,
  Scissors,
  Smile,
  Brush,
  Heart,
  Zap,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { MetricCard } from "./components/metric-card";

function Dashboard() {
  const stats = [
    {
      title: "Citas del Día",
      value: "15",
      description: "Total de citas programadas para hoy.",
      icon: <Calendar className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Citas Canceladas",
      value: "3",
      description: "Citas que han sido canceladas.",
      icon: <XCircle className="text-red-500 w-7 h-7" />,
    },
    {
      title: "Clientes Nuevos",
      value: "8",
      description: "Nuevos clientes registrados esta semana.",
      icon: <UserPlus className="text-green-500 w-7 h-7" />,
    },
    {
      title: "Ingresos Generados",
      value: "$12,350",
      description: "Ingresos obtenidos esta semana.",
      icon: <DollarSign className="text-yellow-500 w-7 h-7" />,
    },
  ];

  const services = [
    {
      icon: <Scissors className="w-5 h-5 text-blue-500" />,
      name: "Corte de Cabello",
      quantity: 120,
      percentage: "30%",
    },
    {
      icon: <Smile className="w-5 h-5 text-green-500" />,
      name: "Blanqueamiento Dental",
      quantity: 80,
      percentage: "20%",
    },
    {
      icon: <Brush className="w-5 h-5 text-orange-500" />,
      name: "Pintura de Uñas",
      quantity: 60,
      percentage: "15%",
    },
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      name: "Spa Facial",
      quantity: 50,
      percentage: "12.5%",
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      name: "Depilación Láser",
      quantity: 40,
      percentage: "10%",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-purple-500" />,
      name: "Consultoría",
      quantity: 30,
      percentage: "7.5%",
    },
  ];

  const appointments = [
    {
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      client: "Juan Pérez",
      service: "Corte de Cabello",
      time: "10:00 AM",
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-500" />,
      client: "Ana López",
      service: "Blanqueamiento Dental",
      time: "11:00 AM",
    },
    {
      icon: <Calendar className="w-5 h-5 text-orange-500" />,
      client: "Carlos Ruiz",
      service: "Pintura de Uñas",
      time: "1:00 PM",
    },
    {
      icon: <Calendar className="w-5 h-5 text-red-500" />,
      client: "María García",
      service: "Spa Facial",
      time: "3:00 PM",
    },
    {
      icon: <Calendar className="w-5 h-5 text-yellow-500" />,
      client: "Luis Fernández",
      service: "Depilación Láser",
      time: "4:30 PM",
    },
    {
      icon: <Calendar className="w-5 h-5 text-purple-500" />,
      client: "Sofía Martínez",
      service: "Consultoría",
      time: "5:30 PM",
    },
  ];

  const [filter, setFilter] = useState("fullYear");

  // Datos de ventas simulados
  const salesData = {
    fullYear: [
      4500, 4800, 5000, 5200, 5800, 6000, 6500, 7000, 7200, 7400, 8000, 8500,
    ],
    last3Months: [7200, 8000, 8500],
    last30Days: [7700, 8100, 8500],
    last7Days: [8300, 8500],
  };

  // Categorías correspondientes (meses o días)
  const categoriesData = {
    fullYear: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    last3Months: ["Octubre", "Noviembre", "Diciembre"],
    last30Days: ["Día 1", "Día 15", "Día 30"],
    last7Days: ["Día 24", "Día 26", "Día 30"],
  };

  // Opciones dinámicas para Highcharts basadas en el filtro seleccionado
  const options: Highcharts.Options = {
    title: {
      text: "Ventas Mensuales de Servicios - SPA de Belleza",
    },
    xAxis: {
      categories: categoriesData[filter as keyof typeof categoriesData],
      title: {
        text: "Tiempo",
      },
    },
    yAxis: {
      title: {
        text: "Ingresos ($)",
      },
    },
    series: [
      {
        type: "line",
        name: "Ventas",
        data: salesData[filter as keyof typeof salesData],
      },
    ],
    tooltip: {
      valuePrefix: "$",
    },
    credits: {
      enabled: false,
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
    },
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total de Clientes"
          value="847"
          change={12.5}
          icon="clients"
          subtitle="156 nuevos este mes"
        />
        <MetricCard
          title="Total de Citas"
          value="1,234"
          change={8.3}
          icon="appointments"
          subtitle="89 programadas para hoy"
        />
        <MetricCard
          title="Total de Servicios"
          value="2,156"
          change={15.2}
          icon="services"
          subtitle="28 tipos diferentes"
        />
        <MetricCard
          title="Ingresos Generados"
          value="$45,890"
          change={23.7}
          icon="revenue"
          subtitle="$3,450 hoy"
        />
      </div>

      <Card className="mt-5">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1 text-center sm:text-left">
            <CardTitle>Ventas de ShifraSPA</CardTitle>
            <CardDescription></CardDescription>
          </div>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="fullYear">Último año</option>
            <option value="last3Months">Últimos 3 meses</option>
            <option value="last30Days">Últimos 30 días</option>
            <option value="last7Days">Últimos 7 días</option>
          </select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {/* Top de Servicios */}
        <Card className=" border border-gray-200 w-full">
          <CardHeader className="p-4">
            <CardTitle className="text-lg font-semibold text-gray-800">
              Top de Servicios
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">
                      Servicio
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">
                      Cantidad
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">
                      %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-2 flex items-center gap-2 text-sm text-gray-700">
                        {service.icon}
                        {service.name}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {service.quantity}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {service.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Próximas Citas */}
        <Card className=" border border-gray-200 w-full">
          <CardHeader className="p-4">
            <CardTitle className="text-lg font-semibold text-gray-800">
              Próximas Citas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">
                      Cliente
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">
                      Servicio
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">
                      Horario
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-2 flex items-center gap-2 text-sm text-gray-700">
                        {appointment.icon}
                        {appointment.client}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {appointment.service}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {appointment.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
