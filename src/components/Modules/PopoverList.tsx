import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
} from "../ui/table";
import { SkillElement } from "./Lists/SkillElement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { PopoverListElement } from "./PopoverListElement";

function filtreSearch(arr: string[], requete: string) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
  });
}
function filtreElement(arr: string[], requete: string) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) === -1;
  });
}

export const PopoverList = ({
  listNames,
  setSelectedNames,
}: {
  listNames: string[];
  setSelectedNames: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedNames, setSearchedNames] = useState<string[]>([]);
  const [lastChecked, setLastChecked] = useState({
    name: "",
    isChecked: false,
  });

  useEffect(() => {
    setSearchedNames(filtreSearch(listNames, searchValue));
  }, [searchValue]);

  useEffect(() => {
    // ajouter ou retirer l'élément de la liste en fonction de si il est checked ou non
    if (lastChecked.isChecked) {
      setSelectedNames((prev) => [...prev, lastChecked.name]);
    } else {
      setSelectedNames((prev) => {
        return filtreElement(prev, lastChecked.name);
      });
    }
  }, [lastChecked]);
  return (
    <Popover>
      <PopoverTrigger>compétences</PopoverTrigger>
      <PopoverContent>
        <Tabs defaultValue="list" className="w-auto">
          <TabsList>
            <TabsTrigger value="list">Liste compétences</TabsTrigger>
            <TabsTrigger value="new">Nouvelle compétence</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <div>
              <Input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Recherche"
              />
            </div>
            <div>
              <Table>
                <TableCaption>sélectionner les compétences lié</TableCaption>
                <TableHeader>
                  {/* <TableHeader className=" fixed"> */}
                  <TableRow>
                    {/* TODO: (pas urgent) je sais pas comment ajouter cette colonne sans casser le scroll */}
                    {/* <TableHead className="w-[100px]">check</TableHead> */}
                    <TableHead>Name</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <ScrollArea className="max-h-80 overflow-y-scroll">
                    {searchedNames.map((name, index) => {
                      return (
                        <PopoverListElement
                          name={name}
                          setLastChecked={setLastChecked}
                          key={index}
                        />
                      );
                    })}
                  </ScrollArea>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent className=" h-[444px]" value="new">
            formulaire de compétences (a priori il faut juste mettre le nom)
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
