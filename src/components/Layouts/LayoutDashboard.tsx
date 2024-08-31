"use client";
import { useState } from "react";
import { Bell, ChevronDown, Filter, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const LayoutDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    "Prospects",
    "Entreprises",
    "Dossiers",
    "Modules",
    "Formateurs",
    "Ressources",
    "Sessions",
    "Agenda",
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-card transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <nav className="h-full flex flex-col p-4 space-y-2">
          {navItems.map((item, index) => (
            <Button key={index} variant="ghost" className="justify-start">
              {item}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-muted p-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex-1 px-4">
            <Input
              placeholder="Barre de raccourcis custom"
              className="max-w-sm"
            />
          </div>
        </header>

        {/* Notifications */}
        <div className="bg-card p-4 m-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">
            Dernières notifications (non lues)
          </h2>
          <p className="text-muted-foreground">Aucune nouvelle notification</p>
        </div>

        {/* Main Area with Resizable Panels */}
        <ResizablePanelGroup
          direction="horizontal"
          className="flex-1 h-[calc(100vh-200px)]"
        >
          <ResizablePanel defaultSize={75} minSize={45}>
            <Tabs defaultValue="overview" className="h-full flex flex-col">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview dossier</TabsTrigger>
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="history">Historique</TabsTrigger>
              </TabsList>
              <ScrollArea className="flex-1">
                <TabsContent value="overview" className="h-full">
                  <div className="bg-card p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">
                      Aperçu du dossier
                    </h3>
                    <p className="text-muted-foreground">
                      Informations générales sur le dossier sélectionné.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="details" className="h-full">
                  <div className="bg-card p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">
                      Détails du dossier
                    </h3>
                    <p className="text-muted-foreground">
                      Informations détaillées sur le dossier sélectionné.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="history" className="h-full">
                  <div className="bg-card p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">
                      Historique du dossier
                    </h3>
                    <p className="text-muted-foreground">
                      Historique des modifications du dossier sélectionné.
                    </p>
                  </div>
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle className="w-0.5" />
          <ResizablePanel defaultSize={25} minSize={30}>
            <div className="h-full flex flex-col p-4">
              <div className="mb-4">
                <Button variant="outline" className="w-full justify-between">
                  Filtre dossiers <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <ScrollArea className="flex-1">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="bg-card p-4 rounded-lg shadow">
                      <h4 className="font-semibold mb-1">Dossier {item}</h4>
                      <p className="text-sm text-muted-foreground">
                        Brève description du dossier {item}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
