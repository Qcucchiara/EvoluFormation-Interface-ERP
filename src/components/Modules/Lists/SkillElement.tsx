import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import React, { useState } from "react";

export const SkillElement = ({ skill }: { skill: string }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TableRow
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      <TableCell className="font-medium">
        <Checkbox checked={isChecked} className=" border-none bg-slate-200" />
      </TableCell>
      <TableCell className=" select-none">{skill}</TableCell>
    </TableRow>
  );
};
