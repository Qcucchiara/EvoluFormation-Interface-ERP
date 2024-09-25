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
import { handlePerson } from "@/services/EvoluFormationAPI";
import { ModaleModuleActions } from "../Modale/ModaleModuleActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: 1,
    first_name: "Jean",
    last_name: "Dupont",
    city: "Paris",
    email: "jean.dupont@email.com",
    tel: "01 23 45 67 89",
  },
  {
    id: 2,
    first_name: "Marie",
    last_name: "Laurent",
    city: "Lyon",
    email: "marie.laurent@email.com",
    tel: "04 56 78 90 12",
  },
  {
    id: 3,
    first_name: "Pierre",
    last_name: "Martin",
    city: "Marseille",
    email: "pierre.martin@email.com",
    tel: "07 89 01 23 45",
  },
  {
    id: 4,
    first_name: "Sophie",
    last_name: "Bernard",
    city: "Bordeaux",
    email: "sophie.bernard@email.com",
    tel: "05 67 89 01 23",
  },
  {
    id: 5,
    first_name: "Luc",
    last_name: "Petit",
    city: "Lille",
    email: "luc.petit@email.com",
    tel: "03 45 67 89 01",
  },
  {
    id: 6,
    first_name: "Claire",
    last_name: "Dubois",
    city: "Toulouse",
    email: "claire.dubois@email.com",
    tel: "05 12 34 56 78",
  },
  {
    id: 7,
    first_name: "Thomas",
    last_name: "Moreau",
    city: "Nantes",
    email: "thomas.moreau@email.com",
    tel: "02 34 56 78 90",
  },
  {
    id: 8,
    first_name: "Émilie",
    last_name: "Leroy",
    city: "Strasbourg",
    email: "emilie.leroy@email.com",
    tel: "03 78 90 12 34",
  },
];

export const ListTrainers = () => {
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [openModale, setOpenModale] = useState(false);
  const [formateurs, setFormateurs] = useState(data);
  const [selectedFormateur, setSelectedFormateur] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    handlePerson.trainer.findAll().then(({ data }) => {
      console.log(data);
      setFormateurs(data);
    });
    setIsReloadNeeded(false);
  }, [isReloadNeeded]);

  const handleRowClick = (formateur: any) => {
    setSelectedFormateur(formateur);
    setIsModalOpen(true);
  };

  useEffect(() => {
    handlePerson.trainer.findAll().then(({ data }: any) => {
      console.log(data);
      setFormateurs(data);
    });
  }, []);
  function remove(id: any) {
    handlePerson.trainer.remove(id).then((res) => {
      console.log(res);
      setIsReloadNeeded(true);
    });
  }
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-5 text-2xl font-bold">Liste des Formateurs</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Prénom</TableHead>
              <TableHead>Ville</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {formateurs.map((formateur) => (
              <TableRow
                key={formateur.id}
                onClick={() => {
                  handleRowClick(formateur);
                }}
                className="cursor-pointer hover:bg-muted/50"
              >
                <TableCell>{formateur.last_name}</TableCell>
                <TableCell>{formateur.first_name}</TableCell>
                <TableCell>{formateur.city}</TableCell>
                <TableCell>
                  {/* <ModaleModuleActions
                    open={openModale}
                    setOpen={setOpenModale}
                  />  */}
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
                      <DropdownMenuItem onClick={() => remove(formateur.id)}>
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedFormateur?.first_name} {selectedFormateur?.last_name}
            </DialogTitle>
            <DialogDescription>
              <p>
                <strong>Ville:</strong> {selectedFormateur?.city}
              </p>
              <p>
                <strong>Email:</strong> {selectedFormateur?.email}
              </p>
              <p>
                <strong>Téléphone:</strong> {selectedFormateur?.phone}
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
