import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const CreateNewProspect = () => {
  return (
    <div className="bg-red-200">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="grid gap-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" placeholder="Enter first name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" placeholder="Enter last name" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="civility">Civility</Label>
        <Select
        //  id="civility"
        >
          <SelectTrigger>
            <SelectValue placeholder="Select civility" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mr">Mr.</SelectItem>
            <SelectItem value="mrs">Mrs.</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="representative-email">Representative Email</Label>
        <Input
          id="representative-email"
          type="email"
          placeholder="Enter representative email"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="representative-phone">Representative Phone</Label>
        <Input
          id="representative-phone"
          type="tel"
          placeholder="Enter representative phone"
        />
      </div>
    </div>
  );
};
