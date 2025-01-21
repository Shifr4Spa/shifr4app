"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Edit,
  Trash2,
  MessageCircle,
  Calendar,
  CreditCard,
  DollarSign,
} from "lucide-react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const data = {
  name: "Juan Pérez",
  type: "⭐ VIP",
  email: "juanperez@example.com",
  registrationDate: "2022-03-21",
  balance: 3500.25,
  stats: {
    totalCitas: 12,
    lastCita: "2024-01-05",
  },
  history: [
    { service: "Masaje Relajante", date: "2024-01-05" },
    { service: "Revisión de Planes", date: "2024-01-03" },
    { service: "Facial Hidratante", date: "2024-01-10" },
    { service: "Manicura y Pedicura", date: "2024-01-12" },
    { service: "Masaje de Piedras Calientes", date: "2024-01-15" },
    { service: "Tratamiento Corporal Anticelulitis", date: "2024-01-17" },
  ],
  employeeNotes: [
    { employee: "Ana", note: "Cliente muy satisfecho con los servicios." },
    { employee: "Luis", note: "Prefiere horarios de tarde para las citas." },
  ],
  paymentMethods: [
    {
      method: "Tarjeta de Crédito",
      used: "Visa - **** 1234",
      icon: <CreditCard className="w-5 h-5 text-blue-500" />,
    },
    {
      method: "Efectivo",
      used: "$300 en la última cita",
      icon: <DollarSign className="w-5 h-5 text-green-500" />,
    },
    {
      method: "Transferencia Bancaria",
      used: "Banco XYZ",
      icon: <CreditCard className="w-5 h-5 text-gray-600" />,
    },
  ],
};

const optionsActivity = {
  chart: {
    type: "column",
  },
  title: {
    text: "Citas por Mes",
  },
  xAxis: {
    categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Cantidad de Citas",
    },
  },
  series: [
    {
      name: "Citas",
      data: [3, 5, 2, 8, 7, 6],
    },
    {
      name: "Total ($)",
      data: [120, 200, 90, 300, 250, 220],
    },
  ],
};

const activityData = [
  { month: "Enero", citas: 3, Total: 120 },
  { month: "Febrero", citas: 5, Total: 200 },
  { month: "Marzo", citas: 2, Total: 90 },
  { month: "Abril", citas: 8, Total: 300 },
  { month: "Mayo", citas: 7, Total: 250 },
  { month: "Junio", citas: 6, Total: 220 },
];

const optionsPieChart = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Distribución de Citas por Servicio",
  },
  series: [
    {
      name: "Citas",
      colorByPoint: true,
      data: [
        { name: "Masaje Relajante", y: 1 },
        { name: "Revisión de Planes", y: 1 },
        { name: "Facial Hidratante", y: 1 },
        { name: "Manicura y Pedicura", y: 1 },
        { name: "Masaje de Piedras Calientes", y: 1 },
        { name: "Tratamiento Corporal Anticelulitis", y: 1 },
      ],
    },
  ],
};

const comments = [
  {
    id: 1,
    employee: "Lucía Gómez",
    date: "2024-01-12",
    comment:
      "El cliente estuvo muy satisfecho con el servicio de masaje relajante. Se mostró muy relajado y mencionó que volverá pronto.",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 2,
    employee: "Carlos Martínez",
    date: "2024-01-15",
    comment:
      "El cliente disfrutó mucho de la revisión de planes. Se le proporcionó información adicional sobre los servicios disponibles.",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
  },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6 min-h-screen">
      <h1 className="text-2xl font-bold font-inter">Detalle de cliente</h1>
      {/* Información General */}
      <Card className="flex space-x-6 shadow-sm">
        {/* Columna izquierda */}
        <CardContent className="flex items-start space-x-6 align-middle pt-[20px]">
          <Avatar className="w-14 h-14">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg font-bold">
              {data.name}{" "}
              <Badge variant="outline" className="mt-2 text-sm">
                {data.type}
              </Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">{data.email}</p>
          </div>
        </CardContent>

        {/* Columna con fecha de registro y saldo pendiente */}
        <CardContent className="flex flex-col space-y-2 pt-[20px]">
          <p className="text-sm">
            <strong>Fecha de Registro:</strong> {data.registrationDate}
          </p>
          <p className="text-sm">
            <strong>Saldo Pendiente:</strong> ${data.balance.toFixed(2)}
          </p>
        </CardContent>

        {/* Columna con total de citas y última cita */}
        <CardContent className="flex flex-col space-y-2 pt-[20px]">
          <p className="text-sm">
            <strong>Total de Citas:</strong> {data.stats.totalCitas}
          </p>
          <p className="text-sm">
            <strong>Última Cita:</strong> {data.stats.lastCita}
          </p>
        </CardContent>

        {/* Columna de botones (a la derecha) */}
        <div className="flex ml-auto space-x-2 justify-end items-center w-[43%]">
          <Button variant="outline" className="flex items-center space-x-2">
            <Edit size={16} />
            <span>Editar</span>
          </Button>
          <Button variant="destructive" className="flex items-center space-x-2">
            <Trash2 size={16} />
            <span>Eliminar</span>
          </Button>
          <Button variant="secondary" className="flex items-center space-x-2">
            <MessageCircle size={16} />
            <span>Mensaje</span>
          </Button>
          <Button variant="secondary" className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>Agendar Cita</span>
          </Button>
        </div>
      </Card>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gráfica de Citas por Mes */}
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Resumen de Actividad
            </CardTitle>
          </CardHeader>
          <HighchartsReact highcharts={Highcharts} options={optionsActivity} />
          {/* Tabla con Resumen de Actividad */}
          <CardContent className="mt-4">
            <table className="table-auto w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left border-b py-2 px-4">Mes</th>
                  <th className="text-left border-b py-2 px-4">Citas</th>
                  <th className="text-left border-b py-2 px-4">Total ($)</th>
                </tr>
              </thead>
              <tbody>
                {activityData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{item.month}</td>
                    <td className="py-2 px-4">{item.citas}</td>
                    <td className="py-2 px-4">${item.Total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Gráfico de Pastel: Distribución de Citas por Servicio */}
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Distribución de Citas por Servicio
            </CardTitle>
          </CardHeader>
          <HighchartsReact highcharts={Highcharts} options={optionsPieChart} />
          {/* Tabla de Servicios Recientes dentro del card */}
          <CardContent className="mt-4">
            <table className="table-auto w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left border-b py-2 px-4">Servicio</th>
                  <th className="text-left border-b py-2 px-4">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {data.history.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{item.service}</td>
                    <td className="py-2 px-4">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Comentarios de los Empleados */}
        <Card className="p-4 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Comentarios de los Empleados
            </CardTitle>
          </CardHeader>
          <CardContent>
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={comment.avatarUrl} alt="Avatar" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-semibold">{comment.employee}</p>
                    <span className="text-xs text-muted-foreground">
                      {comment.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    "{comment.comment}"
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Métodos de Pago Utilizados */}
        <Card className="p-4 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Métodos de Pago Utilizados
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <ul className="space-y-4">
              {data.paymentMethods.map((method, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {method.icon}
                  <div>
                    <strong>{method.method}:</strong>
                    <span className="ml-2">{method.used}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
