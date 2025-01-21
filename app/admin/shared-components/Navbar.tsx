"use client";

import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { menuItems } from "../constants/routes";
import { Bell, Menu, Settings } from "lucide-react";
import QuickAccessDropdown from "./QuickAccessDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/app/lib/supabase"; // Asegúrate de importar supabase
import { useRouter } from "next/navigation"; // Importa useRouter para redirigir después de cerrar sesión

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter(); // Instancia el hook de enrutamiento para redirigir

  // Función para abrir/cerrar el dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Detectar clic fuera del dropdown para cerrarlo
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Función para cerrar sesión
  const handleLogout = async () => {
    await supabase.auth.signOut(); // Cierra la sesión
    localStorage.removeItem("supabase-session"); // Limpia el token de la sesión de Supabase en el localStorage
    router.push("/login"); // Redirige al login
  };

  useEffect(() => {
    // Añadir evento de clic fuera cuando el menú está abierto
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <Settings className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Perfil del usuario
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Configuración
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout} // Agregar la función de cerrar sesión
            >
              Cerrar sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  // Encuentra el menú seleccionado basado en la ruta
  const selectedMenuItem = menuItems.find(
    (item) =>
      pathname === item.href ||
      (item.subMenu && item.subMenu.some((sub) => pathname === sub.href))
  );

  return (
    <header className="bg-white border-b border-gray-300 p-[18.5px]">
      <div className="flex justify-between items-center">
        {/* Nombre e ícono de la sección activa */}
        {selectedMenuItem && (
          <div className="flex items-center gap-2 text-gray-600">
            <selectedMenuItem.icon className="w-5 h-5" />
            <span className="font-medium">{selectedMenuItem.name}</span>
          </div>
        )}

        {/* Campo de búsqueda centrado */}
        <div className="flex-1 flex justify-center">
          <Input
            type="text"
            placeholder="Buscar..."
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Notificaciones y sección activa */}
        <div className="flex items-center gap-4">
          {/* Dropdown de notificaciones */}
          <NotificationsDropdown />
          {/* Menú de accesos directos */}
          <QuickAccessDropdown />
          {/* Dropdown de configuración */}
          <SettingsDropdown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
