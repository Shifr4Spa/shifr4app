"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Botón que muestra avatar, usuario y correo */}
      <Button
        variant="ghost"
        className={cn(
          "flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-black"
        )}
        onClick={toggleDropdown}
      >
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="Avatar"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
        <div className="text-left">
          <span className="block text-sm font-medium">Juan Pérez</span>
          <span className="block text-xs text-gray-500">
            juan.perez@email.com
          </span>
        </div>
      </Button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-48 bg-white shadow-md border border-gray-200 rounded-md z-20"
          )}
        >
          <ul className="divide-y divide-gray-200">
            <li>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                Perfil
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                Configuración
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
