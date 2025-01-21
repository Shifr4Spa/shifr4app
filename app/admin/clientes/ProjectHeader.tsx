import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
}

interface ProjectHeaderProps {
  title: string;
  status: "In Progress" | "Completed" | "On Hold";
  team: TeamMember[];
  additionalMembers?: number;
}

export default function ProjectHeader({
  title = "eCommerce Website Design",
  status = "In Progress",
  team = [
    { id: "1", name: "Team Member 1", avatar: "/placeholder.svg" },
    { id: "2", name: "Team Member 2", avatar: "/placeholder.svg" },
    { id: "3", name: "Team Member 3", avatar: "/placeholder.svg" },
    { id: "4", name: "Team Member 4", avatar: "/placeholder.svg" },
  ],
  additionalMembers = 5,
}: ProjectHeaderProps) {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">{title}</h1>
          <Badge
            variant="secondary"
            className="bg-amber-50 text-amber-700 hover:bg-amber-50"
          >
            {status}
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {team.map((member) => (
              <Avatar key={member.id} className="border-2 border-background">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
            ))}
            {additionalMembers > 0 && (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium">
                +{additionalMembers}
              </div>
            )}
          </div>
          <Button>Add Project</Button>
          <Button variant="outline">Share</Button>
        </div>
      </div>

      <div className="flex items-center justify-between border-b">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview" className="relative">
              Overview
              <Badge variant="secondary" className="ml-2">
                50
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="task">
              Task
              <Badge variant="secondary" className="ml-2">
                50
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="verifications">Verifications</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2 px-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search Task" className="pl-8 w-[200px]" />
          </div>
          <Button variant="outline" size="sm">
            Filter
          </Button>
          <Button variant="outline" size="sm">
            List view
          </Button>
          <Button variant="outline" size="sm">
            Kanban view
          </Button>
        </div>
      </div>
    </div>
  );
}
