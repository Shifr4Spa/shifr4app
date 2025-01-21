import { ReactNode } from "react";
import { supabase } from "../lib/supabase";
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <a href="/admin/dashboard" className="block py-2">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/admin/appointments" className="block py-2">
                Citas
              </a>
            </li>
            <li>
              <a href="/admin/clients" className="block py-2">
                Clientes
              </a>
            </li>
          </ul>
        </nav>
        <Button onClick={handleLogout} className="mt-4">
          Cerrar Sesión
        </Button>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default AdminLayout;
