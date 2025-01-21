"use client";

import DataTableCitas from "./components/DataTableCitas";
import CalendarioCitas from "./components/CalendarioCitas";
import { TabInCell } from "@/components/ui/tabs-in-cell-for-navigation";
import { House, PanelsTopLeft } from "lucide-react";

function Citas() {
  const tabs = [
    {
      value: "todas",
      label: "Todas las Citas",
      content: <DataTableCitas />,
      icon: House, // Opcional
    },
    {
      value: "calendario",
      label: "Calendario",
      content: <CalendarioCitas />,
      icon: PanelsTopLeft, // Opcional
    },
  ];

  return (
    <div className="rounded-md">
      <h1 className="text-2xl font-bold mb-4">Citas</h1>
      <TabInCell tabs={tabs} defaultValue="todas" />
    </div>
  );
}

export default Citas;
