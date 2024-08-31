import React from "react";
import { Label } from "../ui/label";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const InputInteger = () => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="num-students">Number of Students</Label>
      <div className="flex items-center">
        <Button variant="outline" size="icon" className="rounded-l-md">
          <MinusIcon className="h-4 w-4" />
        </Button>
        <Input
          id="num-students"
          type="number"
          className="rounded-none"
          min="0"
          step="1"
        />
        <Button variant="outline" size="icon" className="rounded-r-md">
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
