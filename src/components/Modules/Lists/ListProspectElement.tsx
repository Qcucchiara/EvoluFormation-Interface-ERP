import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataItem } from "./ListModules";
import { ModaleProspectActions } from "../Modale/ModaleProspectActions";
import { handlePerson } from "@/services/EvoluFormationAPI";

export const ListProspectElement = ({
  item,
  setIsReloadNeeded,
}: {
  item: any;
  setIsReloadNeeded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [modalDefaultValue, setModalDefaultValue] = useState<string>();
  const [openModale, setOpenModale] = useState(false);
  const handleAction = (action: any, item: DataItem, defaultValue?: string) => {
    setModalDefaultValue(defaultValue);
    console.log(`Action ${action} for item:`, item);
    // Implement actual logic for details, edit, delete here
  };
  function remove() {
    handlePerson.prospect.remove(item.id);
    console.log("test");
    setIsReloadNeeded(true);
  }
  return (
    <TableRow key={item.id}>
      <TableCell onClick={() => setOpenModale(true)}>
        {item.first_name}
      </TableCell>
      <TableCell onClick={() => setOpenModale(true)}>
        {item.last_name}
      </TableCell>
      <TableCell onClick={() => setOpenModale(true)}>{item.email}</TableCell>
      <TableCell onClick={() => setOpenModale(true)}>{item.phone}</TableCell>
      <TableCell onClick={() => setOpenModale(true)}>{item.type}</TableCell>
      <TableCell>
        <ModaleProspectActions
          item={item}
          open={openModale}
          setOpen={setOpenModale}
          defaultValue={modalDefaultValue}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => handleAction(setOpenModale(true), item, "details")}
            >
              Détails
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleAction(setOpenModale(true), item, "update")}
            >
              Modifier
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction(remove(), item)}>
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
