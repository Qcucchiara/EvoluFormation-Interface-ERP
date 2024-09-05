import React from "react";
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

const ressources = [
  {
    id: 1,
    nom: "Salle de conférence A",
    type: "Salle",
    prix: 100,
    details: "Capacité: 50 personnes, Adresse: 123 Rue de la Conférence, Paris",
  },
  {
    id: 2,
    nom: "Ordinateur portable Dell XPS",
    type: "Matériel",
    prix: 1200,
    details: "Processeur: Intel i7, RAM: 16GB, Stockage: 512GB SSD",
  },
  {
    id: 3,
    nom: "Bureau open space",
    type: "Salle",
    prix: 500,
    details: "Capacité: 20 postes, Adresse: 456 Avenue du Travail, Lyon",
  },
  {
    id: 4,
    nom: "Projecteur 4K",
    type: "Matériel",
    prix: 800,
    details: "Résolution: 3840x2160, Luminosité: 3000 lumens",
  },
  {
    id: 5,
    nom: "Salle de formation",
    type: "Salle",
    prix: 150,
    details:
      "Capacité: 30 personnes, Adresse: 789 Boulevard de l'Éducation, Marseille",
  },
  {
    id: 6,
    nom: 'iMac 27"',
    type: "Matériel",
    prix: 2000,
    details: "Processeur: Apple M1, RAM: 16GB, Stockage: 1TB SSD",
  },
  {
    id: 7,
    nom: "Studio d'enregistrement",
    type: "Salle",
    prix: 300,
    details:
      "Équipement professionnel, Adresse: 101 Rue de la Musique, Bordeaux",
  },
  {
    id: 8,
    nom: "Tablette graphique Wacom",
    type: "Matériel",
    prix: 400,
    details: 'Taille: 16", Sensibilité à la pression: 8192 niveaux',
  },
];

export const ListRessources = () => {
  const [selectedRessource, setSelectedRessource] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (ressource: any) => {
    setSelectedRessource(ressource);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Liste des Ressources</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Prix (€)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ressources.map((ressource) => (
            <TableRow
              key={ressource.id}
              onClick={() => handleRowClick(ressource)}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell>{ressource.nom}</TableCell>
              <TableCell>{ressource.type}</TableCell>
              <TableCell>{ressource.prix}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedRessource?.nom}</DialogTitle>
            <DialogDescription>
              <p>
                <strong>Type:</strong> {selectedRessource?.type}
              </p>
              <p>
                <strong>Prix:</strong> {selectedRessource?.prix} €
              </p>
              <p>
                <strong>Détails:</strong> {selectedRessource?.details}
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
