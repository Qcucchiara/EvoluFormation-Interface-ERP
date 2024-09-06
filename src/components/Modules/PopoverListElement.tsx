import React, { useEffect, useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";

type LastChecked = {
  name: string;
  isChecked: boolean;
};

export const PopoverListElement = ({
  name,
  setLastChecked,
}: {
  name: string;
  setLastChecked: React.Dispatch<React.SetStateAction<LastChecked>>;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setLastChecked({ name: name, isChecked: isChecked });
  }, [isChecked]);

  return (
    <TableRow
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      {/* TODO: (pas urgent) je sais pas comment ajouter cette colonne sans casser le scroll */}
      {/* <TableCell className="font-medium"></TableCell> */}
      <TableCell className=" select-none">
        <Checkbox
          checked={isChecked}
          className=" border-none bg-slate-200 mr-8"
        />
        {name}
      </TableCell>
    </TableRow>
  );
};
