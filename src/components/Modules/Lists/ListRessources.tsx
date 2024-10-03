import React, { useEffect } from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ModaleModuleActions } from "../Modale/ModaleModuleActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { handleRessource } from "@/services/EvoluFormationAPI/handleRessource";

type Ressource = {
  id: string;
  name: string;
  type: string;
  price: number;
  type_name?: string;
  details?: string;
};

const dummyData = [
  {
    id: "1",
    name: "Salle de conférence A",
    type: "Salle",
    price: 100,
    details: "Capacité: 50 personnes, Adresse: 123 Rue de la Conférence, Paris",
  },
  {
    id: "2",
    name: "Ordinateur portable Dell XPS",
    type: "Matériel",
    price: 1200,
    details: "Processeur: Intel i7, RAM: 16GB, Stockage: 512GB SSD",
  },
  {
    id: "3",
    name: "Bureau open space",
    type: "Salle",
    price: 500,
    details: "Capacité: 20 postes, Adresse: 456 Avenue du Travail, Lyon",
  },
  {
    id: "4",
    name: "Projecteur 4K",
    type: "Matériel",
    price: 800,
    details: "Résolution: 3840x2160, Luminosité: 3000 lumens",
  },
  {
    id: "5",
    name: "Salle de formation",
    type: "Salle",
    price: 150,
    details:
      "Capacité: 30 personnes, Adresse: 789 Boulevard de l'Éducation, Marseille",
  },
  {
    id: "6",
    name: 'iMac 27"',
    type: "Matériel",
    price: 2000,
    details: "Processeur: Apple M1, RAM: 16GB, Stockage: 1TB SSD",
  },
  {
    id: "7",
    name: "Studio d'enregistrement",
    type: "Salle",
    price: 300,
    details:
      "Équipement professionnel, Adresse: 101 Rue de la Musique, Bordeaux",
  },
  {
    id: "8",
    name: "Tablette graphique Wacom",
    type: "Matériel",
    price: 400,
    details: 'Taille: 16", Sensibilité à la pression: 8192 niveaux',
  },
];

export const ListRessources = () => {
  const [ressources, setRessources] = useState<Ressource[]>(dummyData);
  const [openModale, setOpenModale] = useState(false);
  const [selectedRessource, setSelectedRessource] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    handleRessource.findAll().then((res) => {
      console.log(res.data.data);
      setRessources(res.data.data);
    });
    setRefresh(false);
  }, [refresh]);

  const handleRowClick = (ressource: any) => {
    setSelectedRessource(ressource);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-5 text-2xl font-bold">Liste des Ressources</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>nom</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>prix (€)</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ressources.map((ressource) => (
            <TableRow
              key={ressource.id}
              onClick={() => handleRowClick(ressource)}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell>{ressource.name}</TableCell>
              <TableCell>{ressource.type_name || "NO_CATEGORY"}</TableCell>
              <TableCell>{ressource.price}</TableCell>
              <TableCell>
                <ModaleModuleActions
                  open={openModale}
                  setOpen={setOpenModale}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Détails</DropdownMenuItem>
                    <DropdownMenuItem>Modifier</DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        handleRessource.remove(ressource.id);
                        setRefresh(true);
                        setOpenModale(false);
                      }}
                    >
                      Supprimer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedRessource?.name}</DialogTitle>
            <DialogDescription>
              <strong>Nom:</strong> {selectedRessource?.name} €<br />
              <strong>Type:</strong> {selectedRessource?.type} <br />
              <strong>Prix:</strong> {selectedRessource?.price} <br />
              <strong>Détails:</strong> {selectedRessource?.details}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
