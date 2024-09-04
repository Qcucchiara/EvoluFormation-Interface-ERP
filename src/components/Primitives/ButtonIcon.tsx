import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ButtonIcon = ({ children, className, ...props }: any) => {
  return (
    <div
      className={cn(
        "p-2 aspect-square rounded-full hover:bg-slate-100 m-auto",
        className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent>{props.description}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
