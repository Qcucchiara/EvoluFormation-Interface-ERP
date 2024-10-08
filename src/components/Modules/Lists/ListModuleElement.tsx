import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import { ModaleModuleActions } from "../Modale/ModaleModuleActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataItem } from "./ListModules";
import { handleModule } from "@/services/EvoluFormationAPI/handleModule";

export const ListModuleElement = ({
  item,
  setRefresh,
}: {
  item: any;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openModale, setOpenModale] = useState(false);

  const handleAction = (action: string, item: any) => {
    switch (action) {
      case "supprimer":
        handleModule.remove(item.id).then(() => setRefresh(true));

        break;

      default:
        break;
    }
    console.log(`Action ${action} for item:`, item);
    // Implement actual logic for details, edit, delete here
  };
  return (
    <TableRow key={item.id}>
      <TableCell onClick={() => setOpenModale(true)}>{item.title}</TableCell>
      <TableCell onClick={() => setOpenModale(true)}>{item.category}</TableCell>
      <TableCell onClick={() => setOpenModale(true)}>{item.amount} €</TableCell>
      <TableCell onClick={() => setOpenModale(true)}>{item.duration}</TableCell>
      <TableCell onClick={() => setOpenModale(true)}>
        {/* {item.domaineBPF} */}
        In_Progress
      </TableCell>
      <TableCell>
        <ModaleModuleActions open={openModale} setOpen={setOpenModale} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleAction("details", item)}>
              Détails
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction("modifier", item)}>
              Modifier
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction("supprimer", item)}>
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
