import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import React, { useState } from "react";
import { ModaleCompanyActions } from "../Modale/ModaleCompanyActions";

export const ListCompanyElement = ({ entreprise }: { entreprise: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TableRow
        key={entreprise.id}
        className="cursor-pointer"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <TableCell>{entreprise.name}</TableCell>
        <TableCell>{entreprise.siret}</TableCell>
        <TableCell>{entreprise.address}</TableCell>
        <TableCell>{entreprise.city}</TableCell>
        <TableCell>
          <Button variant="outline" size="sm">
            View
          </Button>
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
