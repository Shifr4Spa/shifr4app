"use client";

import Navbar from "./shared-components/Navbar";
import "../../styles/globals.css";
import Sidebar from "./shared-components/Sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SessionProvider } from "../context/SessionProvider";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

          {/* Main Content */}
          <div
            className={`flex-1 flex flex-col transition-all duration-300 ${
              isCollapsed ? "ml-16" : "ml-72"
            }`}
          >
            <Navbar />
            <main className="flex-1 overflow-y-auto p-6">
              <SessionProvider>{children}</SessionProvider>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default AdminLayout;
