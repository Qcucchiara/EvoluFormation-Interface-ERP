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
  isFound,
}: {
  name: string;
  setLastChecked: React.Dispatch<React.SetStateAction<LastChecked>>;
  isFound: boolean;
}) => {
  const [isChecked, setIsChecked] = useState(isFound);
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
      <TableCell className="select-none">
        <Checkbox
          checked={isChecked}
          className="mr-8 border-none bg-slate-200"
        />
        {name}
      </TableCell>
    </TableRow>
  );
};
