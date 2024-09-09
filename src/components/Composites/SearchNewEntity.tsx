import React from "react";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { PlusIcon } from "lucide-react";
import { ButtonIcon } from "../Primitives/ButtonIcon";

export const SearchNewEntity = ({ ...props }) => {
  return (
    <div className="mb-2 flex gap-2">
      <Input id="prospect" list="prospects-list" type="search" />
      <ButtonIcon description={"Create"}>
        <PlusIcon />
      </ButtonIcon>
      <datalist id="prospects-list">
        {props.listItems.map((element: string, index: number) => {
          return <option key={element + index} value={element}></option>;
        })}
      </datalist>
    </div>
  );
};
