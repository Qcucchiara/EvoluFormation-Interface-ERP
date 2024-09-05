import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { ListSkills } from "./Lists/ListSkills";
import { Input } from "../ui/input";

export const PopoverSkill = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>compétences</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Tabs defaultValue="list" className="w-auto">
          <TabsList>
            <TabsTrigger value="list">Liste compétences</TabsTrigger>
            <TabsTrigger value="new">Nouvelle compétence</TabsTrigger>
          </TabsList>
          <TabsContent className="max-h-[400px] overflow-y-scroll" value="list">
            <div>
              <Input type="text" placeholder="Recherche" />
            </div>
            <div>
              <ScrollArea>
                <ListSkills />
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="new">
            formulaire de compétences (a priori il faut juste mettre le nom)
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
