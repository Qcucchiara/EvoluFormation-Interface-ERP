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

const formateurs = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    city: "Paris",
    email: "jean.dupont@email.com",
    tel: "01 23 45 67 89",
  },
  {
    id: 2,
    firstName: "Marie",
    lastName: "Laurent",
    city: "Lyon",
    email: "marie.laurent@email.com",
    tel: "04 56 78 90 12",
  },
  {
    id: 3,
    firstName: "Pierre",
    lastName: "Martin",
    city: "Marseille",
    email: "pierre.martin@email.com",
    tel: "07 89 01 23 45",
  },
  {
    id: 4,
    firstName: "Sophie",
    lastName: "Bernard",
    city: "Bordeaux",
    email: "sophie.bernard@email.com",
    tel: "05 67 89 01 23",
  },
  {
    id: 5,
    firstName: "Luc",
    lastName: "Petit",
    city: "Lille",
    email: "luc.petit@email.com",
    tel: "03 45 67 89 01",
  },
  {
    id: 6,
    firstName: "Claire",
    lastName: "Dubois",
    city: "Toulouse",
    email: "claire.dubois@email.com",
    tel: "05 12 34 56 78",
  },
  {
    id: 7,
    firstName: "Thomas",
    lastName: "Moreau",
    city: "Nantes",
    email: "thomas.moreau@email.com",
    tel: "02 34 56 78 90",
  },
  {
    id: 8,
    firstName: "Émilie",
    lastName: "Leroy",
    city: "Strasbourg",
    email: "emilie.leroy@email.com",
    tel: "03 78 90 12 34",
  },
];

export const ListTrainers = () => {
  const [selectedFormateur, setSelectedFormateur] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (formateur: any) => {
    setSelectedFormateur(formateur);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Liste des Formateurs</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Prénom</TableHead>
              <TableHead>Ville</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {formateurs.map((formateur) => (
              <TableRow
                key={formateur.id}
                onClick={() => handleRowClick(formateur)}
                className="cursor-pointer hover:bg-muted/50"
              >
                <TableCell>{formateur.lastName}</TableCell>
                <TableCell>{formateur.firstName}</TableCell>
                <TableCell>{formateur.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedFormateur?.firstName} {selectedFormateur?.lastName}
            </DialogTitle>
            <DialogDescription>
              <p>
                <strong>Ville:</strong> {selectedFormateur?.city}
              </p>
              <p>
                <strong>Email:</strong> {selectedFormateur?.email}
              </p>
              <p>
                <strong>Téléphone:</strong> {selectedFormateur?.tel}
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
