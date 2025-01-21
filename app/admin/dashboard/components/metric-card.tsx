import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Scissors, DollarSign } from "lucide-react";

function getGradientClass(
  icon: "clients" | "appointments" | "services" | "revenue"
) {
  switch (icon) {
    case "clients":
      return "bg-gradient-to-br from-blue-400 to-blue-600";
    case "appointments":
      return "bg-gradient-to-br from-purple-400 to-purple-600";
    case "services":
      return "bg-gradient-to-br from-green-400 to-green-600";
    case "revenue":
      return "bg-gradient-to-br from-yellow-400 to-yellow-600";
    default:
      return "bg-gradient-to-br from-gray-400 to-gray-600";
  }
}

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: "clients" | "appointments" | "services" | "revenue";
  subtitle?: string;
}

export function MetricCard({
  title,
  value,
  change,
  icon,
  subtitle,
}: MetricCardProps) {
  const icons = {
    clients: Users,
    appointments: Calendar,
    services: Scissors,
    revenue: DollarSign,
  };

  const Icon = icons[icon];

  return (
    <Card className={`overflow-hidden ${getGradientClass(icon)}`}>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg p-2 bg-white bg-opacity-20">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-white font-medium">{title}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">{value}</span>
            {subtitle && (
              <span className="text-sm text-white opacity-80">{subtitle}</span>
            )}
            <div className="flex items-center gap-1">
              <span
                className={`text-sm font-medium ${
                  change >= 0 ? "text-green-300" : "text-red-300"
                }`}
              >
                {change >= 0 ? "↗" : "↘"} {Math.abs(change)}%
              </span>
              <span className="text-sm text-white opacity-80">
                Desde el mes pasado
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
