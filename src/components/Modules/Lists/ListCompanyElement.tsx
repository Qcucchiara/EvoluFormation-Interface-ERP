import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import React, { useState } from "react";
import { ModaleCompanyActions } from "../Modale/ModaleCompanyActions";
import { ModaleModuleActions } from "../Modale/ModaleModuleActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export const ListCompanyElement = ({ entreprise }: { entreprise: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModale, setOpenModale] = useState(false);

  return (
    <>
      <ModaleModuleActions open={openModale} setOpen={setOpenModale} />
      <TableRow
        key={entreprise.id}
        className="cursor-pointer"
        onClick={() => {
          setOpenModale(!openModale);
        }}
      >
        <TableCell>{entreprise.name}</TableCell>
        <TableCell>{entreprise.siret}</TableCell>
        <TableCell>{entreprise.address}</TableCell>
        <TableCell>{entreprise.city}</TableCell>
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
              <DropdownMenuItem>Supprimer</DropdownMenuItem>
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
