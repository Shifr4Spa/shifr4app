import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideIcon } from "lucide-react";

interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
  icon?: LucideIcon; // Icono opcional
  className?: string;
}

interface TabDemoProps {
  tabs: Tab[];
  defaultValue?: string; // Valor por defecto del tab activo
  className?: string;
}

function TabInCell({ tabs, defaultValue, className }: TabDemoProps) {
  return (
    <Tabs defaultValue={defaultValue || tabs[0]?.value} className={className}>
      <ScrollArea>
        <TabsList className="h-auto -space-x-px p-0 shadow-sm shadow-black/5 rtl:space-x-reverse rounded-bl-none rounded-br-none">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="relative overflow-hidden rounded-none border  border-border py-2 text-gray-500 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-tl-sm last:rounded-tr-sm data-[state=active]:text-[#EB5017] data-[state=active]:after:bg-[#EB5017]"
            >
              {tab.icon && (
                <tab.icon
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="bg-white">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export { TabInCell };
