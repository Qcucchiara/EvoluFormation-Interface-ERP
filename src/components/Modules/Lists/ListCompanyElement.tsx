import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { ModaleCompanyActions } from "../Modale/ModaleCompanyActions";
import { ModaleModuleActions } from "../Modale/ModaleModuleActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { handleCompany } from "@/services/EvoluFormationAPI";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export const ListCompanyElement = ({
  entreprise,
  setRefresh,
}: {
  entreprise: any;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModale, setOpenModale] = useState(false);

  function handleDelete(id: string) {
    handleCompany.remove(id).then((res) => {
      console.log(res);
      setRefresh(true);
      // TODO: penser a ajouter les toaster
    });
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  return (
    <>
      <ModaleModuleActions open={openModale} setOpen={setOpenModale} />
      <TableRow key={entreprise.id} className="cursor-pointer">
        <TableCell
          onClick={() => {
            setOpenModale(!openModale);
          }}
        >
          {entreprise.name}
        </TableCell>
        <TableCell
          onClick={() => {
            setOpenModale(!openModale);
          }}
        >
          {entreprise.siret}
        </TableCell>
        <TableCell
          onClick={() => {
            setOpenModale(!openModale);
          }}
        >
          {entreprise.street}
        </TableCell>
        <TableCell
          onClick={() => {
            setOpenModale(!openModale);
          }}
        >
          {entreprise.city}
        </TableCell>
        <TableCell
          onClick={() => {
            setOpenModale(!openModale);
          }}
        >
          {new Date(entreprise.updated_at).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
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
              <DropdownMenuItem>Détails</DropdownMenuItem>
              <DropdownMenuItem>Modifier</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  handleDelete(entreprise.id);
                }}
              >
                Supprimer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      <ModaleCompanyActions
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedEntreprise={entreprise}
      />
    </>
  );
};
