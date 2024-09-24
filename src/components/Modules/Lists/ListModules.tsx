"use client";
import React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListModuleElement } from "./ListModuleElement";

export type DataItem = {
  id: number;
  titre: string;
  categorie: string;
  montant: number;
  duree: string;
  domaineBPF: string;
};

const data: DataItem[] = [
  {
    id: 1,
    titre: "Projet A",
    categorie: "Développement",
    montant: 10000,
    duree: "6 mois",
    domaineBPF: "Technologie",
  },
  {
    id: 2,
    titre: "Projet B",
    categorie: "Marketing",
    montant: 5000,
    duree: "3 mois",
    domaineBPF: "Communication",
  },
  {
    id: 3,
    titre: "Projet C",
    categorie: "Recherche",
    montant: 15000,
    duree: "12 mois",
    domaineBPF: "Innovation",
  },
  {
    id: 4,
    titre: "Projet D",
    categorie: "Formation",
    montant: 3000,
    duree: "1 mois",
    domaineBPF: "Ressources Humaines",
  },
  {
    id: 5,
    titre: "Projet E",
    categorie: "Infrastructure",
    montant: 20000,
    duree: "9 mois",
    domaineBPF: "Technologie",
  },
];

type SortConfig = {
  key: keyof DataItem;
  direction: "asc" | "desc";
};
const ListModules = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "id",
    direction: "asc",
  });

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    item.titre.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const requestSort = (key: keyof DataItem) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Rechercher par titre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {["titre", "categorie", "montant", "duree", "domaineBPF"].map(
              (key) => (
                <TableHead key={key}>
                  <Button
                    variant="ghost"
                    onClick={() => requestSort(key as keyof DataItem)}
                    className="hover:bg-transparent"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              ),
            )}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item, index) => (
            <ListModuleElement key={index} item={item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListModules;
