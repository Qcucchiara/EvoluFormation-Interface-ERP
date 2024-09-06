import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

export const ListCompanyElement = ({ entreprise }: { entreprise: any }) => {
  return (
    <TableRow key={entreprise.id} className="cursor-pointer">
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
  );
};
