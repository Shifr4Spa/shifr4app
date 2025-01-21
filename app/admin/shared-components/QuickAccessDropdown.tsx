"use client";

import { Menu } from "lucide-react";
import { menuItems } from "../constants/routes";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const QuickAccessDropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú
  const dropdownRef = useRef<HTMLDivElement>(null); // Referencia para el menú desplegable

  const toggleDropdown = () => setIsOpen(!isOpen); // Alternar visibilidad del menú

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Cerrar el menú si se hace clic fuera del componente
    }
  };

  useEffect(() => {
    // Agregar el event listener para detectar clics fuera del componente
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remover el event listener al desmontar el componente
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-48 z-50">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                router.push(item.href);
                setIsOpen(false); // Cerrar el menú al seleccionar una opción
              }}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              <item.icon className="inline-block w-4 h-4 mr-2 text-gray-600" />
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuickAccessDropdown;
