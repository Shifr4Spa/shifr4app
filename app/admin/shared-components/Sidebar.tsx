"use client";

import { usePathname, useRouter } from "next/navigation";
import { menuItems } from "../constants/routes";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);

  const [user, setUser] = useState<{
    name: string | null;
    email: string | null;
    avatarUrl: string | null;
  }>({
    name: null,
    email: null,
    avatarUrl: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser({
          name: session.user.user_metadata.full_name || "Usuario",
          email: session.user.email || null,
          avatarUrl: session.user.user_metadata.avatar_url || null,
        });
      }
    };

    fetchUser();
  }, []);

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name); // Toggle submenu visibility
  };

  const renderLogoSection = () => (
    <div className="flex items-center p-4 border-b border-gray-700">
      <img
        src="/logosidebar-white.png"
        alt="Logo"
        className={cn(
          "transition-all",
          isCollapsed ? "w-8 h-8" : "w-12 h-12 mr-2"
        )}
      />
      {!isCollapsed && (
        <div>
          <h1 className="text-[16px] font-bold font-inter">Admin Panel</h1>
          <p className="text-xs text-gray-400">ShifraSPA v1.0.0</p>
        </div>
      )}
    </div>
  );

  const renderUserSection = () => (
    <div className="flex flex-col items-center p-4">
      {isCollapsed ? (
        <div className="relative">
          <Avatar className="rounded-full w-12 h-12">
            <AvatarImage
              src={user.avatarUrl || "https://i.pravatar.cc/150?img=12"}
              alt="User Avatar"
            />
            <AvatarFallback>{user.name ? user.name[0] : "U"}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
        </div>
      ) : (
        <div className="relative">
          <div
            className="relative rounded-full p-[4px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), #1E293B)",
            }}
          >
            <div className="rounded-full p-[5px] bg-[#0f172a]">
              <Avatar className="rounded-full w-16 h-16">
                <AvatarImage
                  src={user.avatarUrl || "https://i.pravatar.cc/150?img=12"}
                  alt="User Avatar"
                />
                <AvatarFallback>
                  {user.name ? user.name[0] : "U"}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
        </div>
      )}
      {!isCollapsed && (
        <>
          <h2 className="text-lg font-semibold">{user.name || "Usuario"}</h2>
          <p className="text-sm text-gray-400">{user.email}</p>
        </>
      )}
    </div>
  );

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <div key={item.name} className="relative">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => {
                if (item.subMenu) {
                  toggleSubMenu(item.name);
                } else {
                  router.push(item.href);
                }
              }}
              className={cn(
                "flex items-center gap-4 text-sm rounded transition w-full text-left mt-1 font-inter cursor-pointer p-2",
                pathname === item.href
                  ? "bg-[#2a3754f0] text-white"
                  : "text-[#e2e2e2] hover:bg-[#2a3754f0] hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5" />
              {!isCollapsed && (
                <>
                  <span>{item.name}</span>
                  {item.subMenu && (
                    <ChevronDown
                      className={cn(
                        "ml-auto transition-transform",
                        openSubMenu === item.name && "rotate-180"
                      )}
                    />
                  )}
                </>
              )}
            </button>
          </TooltipTrigger>
          {isCollapsed && (
            <TooltipContent side="right" className="ml-2">
              <span>{item.name}</span>
            </TooltipContent>
          )}
        </Tooltip>

        {item.subMenu && openSubMenu === item.name && !isCollapsed && (
          <div className="pl-8 mt-2 w-full">
            {item.subMenu.map((subItem) => (
              <button
                key={subItem.name}
                onClick={() => router.push(subItem.href)}
                className={cn(
                  "flex items-center gap-4 text-sm text-left font-inter cursor-pointer p-2 w-full",
                  pathname === subItem.href
                    ? "bg-[#2a3754f0] text-white"
                    : "text-[#e2e2e2] hover:bg-[#2a3754f0] hover:text-white"
                )}
              >
                {/* Ícono de viñeta */}
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                <span>{subItem.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    ));

  return (
    <TooltipProvider>
      <aside
        className={cn(
          "bg-[#0f172a] text-white h-full transition-all duration-75 fixed sidebar-with-rounded-piquito",
          isCollapsed ? "w-16" : "w-72"
        )}
      >
        <Button
          variant="ghost"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-[2rem] -right-4 w-7 h-7 bg-[#ffffff] text-gray-500 hover:text-gray-500 p-1 rounded-full shadow-md border border-gray-100 z-40"
        >
          {isCollapsed ? (
            <ArrowRight className="w-4 h-4" />
          ) : (
            <ArrowLeft className="w-4 h-4" />
          )}
        </Button>

        {renderLogoSection()}
        {renderUserSection()}
        <nav className="mt-4 pl-3 pr-3">{renderMenuItems()}</nav>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
