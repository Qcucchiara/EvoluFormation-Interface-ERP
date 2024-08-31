"use client";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  DotIcon,
  Ellipsis,
  Filter,
  Menu,
  Plus,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormProspect } from "@/components/Modules/Forms/FormProspect";

export default function GestionProspects() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Prospects", active: true },
    "Entreprises",
    "Dossiers",
    "Modules",
    "Formateurs",
    "Ressources",
    "Sessions",
    "Agenda",
  ];

  const actionTabs = [
    "Nouveau",
    "Overview",
    "Entreprise(s)",
    "Dossier",
    "Devis",
    "Commentaire(s)",
  ];

  const prospects = [
    {
      id: 1,
      name: "John Doe",
      company: "ABC Corp",
      status: "À contacter",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "XYZ Inc",
      status: "Qualifié",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Bob Johnson",
      company: "123 Industries",
      status: "En attente",
      email: "bob@example.com",
    },
    {
      id: 4,
      name: "Alice Brown",
      company: "Tech Solutions",
      status: "Non qualifié",
      email: "alice@example.com",
    },
    {
      id: 5,
      name: "Charlie Davis",
      company: "Global Services",
      status: "À contacter",
      email: "charlie@example.com",
    },
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
            <Button
              key={index}
              variant={
                typeof item === "object" && item.active ? "secondary" : "ghost"
              }
              className="justify-start"
            >
              {typeof item === "object" ? item.name : item}
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

        {/* Main Area */}
        <div className="flex-1 overflow-auto p-4">
          <div className="mb-6">
            <Tabs defaultValue="Nouveau" className="w-full">
              <TabsList className="w-full justify-start mb-4">
                {actionTabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab.toLowerCase().replace(" ", "-")}
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              {actionTabs.map((tab) => (
                <Card>
                  <TabsContent
                    key={tab}
                    value={tab.toLowerCase().replace(" ", "-")}
                  >
                    {/* <CardHeader>
                      <CardTitle>Actions Prospect - {tab}</CardTitle>
                    </CardHeader> */}

                    {tab !== "Nouveau" ? (
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Entreprise(s)
                            </h3>
                            <Input placeholder="Ajouter une entreprise" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Dossier
                            </h3>
                            <Input placeholder="Lier un dossier" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Devis
                            </h3>
                            <Button>Créer un devis</Button>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Commentaires
                            </h3>
                            <textarea
                              className="w-full p-2 border rounded-md"
                              rows={3}
                              placeholder="Ajouter un commentaire"
                            ></textarea>
                          </div>
                        </div>
                      </CardContent>
                    ) : (
                      <FormProspect />
                    )}
                  </TabsContent>
                </Card>
              ))}
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Liste des prospects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <Input
                    placeholder="Recherche prospects"
                    className="max-w-sm"
                  />
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Nouveau prospect
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prospects.map((prospect) => (
                      <TableRow key={prospect.id}>
                        <TableCell>{prospect.name}</TableCell>
                        <TableCell>{prospect.status}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Ellipsis />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>Editer</DropdownMenuItem>
                              <DropdownMenuItem>Supprimer</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
