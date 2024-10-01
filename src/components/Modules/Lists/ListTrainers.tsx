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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handlePerson } from "@/services/EvoluFormationAPI/handlePerson";
import { ModaleTrainerActions } from "../Modale/ModaleTrainerActions";

const data = [
  {
    id: 1,
    first_name: "Jean",
    last_name: "Dupont",
    city: "Paris",
    email: "jean.dupont@email.com",
    phone: "01 23 45 67 89",
  },
  {
    id: 2,
    first_name: "Marie",
    last_name: "Laurent",
    city: "Lyon",
    email: "marie.laurent@email.com",
    phone: "04 56 78 90 12",
  },
  {
    id: 3,
    first_name: "Pierre",
    last_name: "Martin",
    city: "Marseille",
    email: "pierre.martin@email.com",
    phone: "07 89 01 23 45",
  },
  {
    id: 4,
    first_name: "Sophie",
    last_name: "Bernard",
    city: "Bordeaux",
    email: "sophie.bernard@email.com",
    phone: "05 67 89 01 23",
  },
  {
    id: 5,
    first_name: "Luc",
    last_name: "Petit",
    city: "Lille",
    email: "luc.petit@email.com",
    phone: "03 45 67 89 01",
  },
  {
    id: 6,
    first_name: "Claire",
    last_name: "Dubois",
    city: "Toulouse",
    email: "claire.dubois@email.com",
    phone: "05 12 34 56 78",
  },
  {
    id: 7,
    first_name: "Thomas",
    last_name: "Moreau",
    city: "Nantes",
    email: "thomas.moreau@email.com",
    phone: "02 34 56 78 90",
  },
  {
    id: 8,
    first_name: "Émilie",
    last_name: "Leroy",
    city: "Strasbourg",
    email: "emilie.leroy@email.com",
    phone: "03 78 90 12 34",
  },
];

export const ListTrainers = () => {
  const [modalDefaultValue, setModalDefaultValue] = useState<string>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [openModale, setOpenModale] = useState(false);
  const [formateurs, setFormateurs] = useState(data);
  const [selectedFormateur, setSelectedFormateur] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    handlePerson.trainer.findAll().then(({ data }) => {
      setFormateurs(data);
    });
    setIsReloadNeeded(false);
  }, [isReloadNeeded]);

  const handleRowClick = (formateur: any) => {
    setSelectedFormateur(formateur);
    setIsModalOpen(true);
  };
  function remove(id: any) {
    handlePerson.trainer.remove(id).then((res) => {
      console.log(res);
      setIsReloadNeeded(true);
    });
  }
  function handleAction(formateur: any, defaultValue: string) {
    setSelectedFormateur(formateur);
    setModalDefaultValue(defaultValue);
    setOpenModale(true);
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
                className="cursor-pointer hover:bg-muted/50"
              >
                <TableCell
                  onClick={() => {
                    handleRowClick(formateur);
                  }}
                >
                  {formateur.last_name}
                </TableCell>
                <TableCell
                  onClick={() => {
                    handleRowClick(formateur);
                  }}
                >
                  {formateur.first_name}
                </TableCell>
                <TableCell
                  onClick={() => {
                    handleRowClick(formateur);
                  }}
                >
                  {formateur.city}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => {
                          handleAction(formateur, "details");
                        }}
                      >
                        Détails
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          handleAction(formateur, "update");
                        }}
                      >
                        Modifier
                      </DropdownMenuItem>
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
      <ModaleTrainerActions
        open={openModale}
        setOpen={setOpenModale}
        item={selectedFormateur}
        defaultValue={modalDefaultValue}
      />
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
