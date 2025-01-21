import { Home, Calendar, Users, Briefcase, Settings } from "lucide-react";

export const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Home },
  { name: "Citas", href: "/admin/citas", icon: Calendar },
  { name: "Clientes", href: "/admin/clientes", icon: Users },
  { name: "Empleados", href: "/admin/empleados", icon: Briefcase },
  {
    name: "Configuración",
    href: "/admin/configuracion",
    icon: Settings,
    subMenu: [
      { name: "Perfil", href: "/admin/configuracion/perfil" },
      { name: "Preferencias", href: "/admin/configuracion/preferencias" },
    ],
  },
];
