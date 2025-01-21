"use client";

import { Bell } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad
  const dropdownRef = useRef<HTMLDivElement>(null); // Referencia para el componente

  const toggleDropdown = () => setIsOpen(!isOpen); // Alternar visibilidad

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Cerrar si se hace clic fuera
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      title: "New Comment",
      message: "You have a new comment on your post.",
      time: "2m ago",
    },
    {
      title: "System Update",
      message: "Your system has been updated successfully.",
      time: "10m ago",
    },
    {
      title: "Friend Request",
      message: "John Doe sent you a friend request.",
      time: "30m ago",
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <Bell className="w-5 h-5 text-gray-600" />
        {/* Indicador de nuevas notificaciones */}
        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-64 z-50">
          <h4 className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
            Notifications
          </h4>
          {notifications.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {notifications.map((notif, index) => (
                <li key={index} className="px-4 py-2 flex items-start">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full mt-1.5 mr-3"></div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-800">{notif.title}</p>
                    <p className="text-gray-600">{notif.message}</p>
                    <span className="text-xs text-gray-400">{notif.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-2 text-sm text-gray-500">No notifications</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown;
