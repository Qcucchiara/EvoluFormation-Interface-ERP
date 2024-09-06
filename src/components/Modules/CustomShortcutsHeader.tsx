import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Input } from "../ui/input";

export const CustomShortcutsHeader = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-muted p-4">
      <div className="flex-1 px-4">
        <Input placeholder="Barre de raccourcis custom" className="max-w-sm" />
      </div>
      <Button
        variant="ghost"
        size="icon"
        // className="lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
    </header>
  );
};
