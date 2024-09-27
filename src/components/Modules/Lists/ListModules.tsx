"use client";
import React, { useEffect } from "react";
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
import { handleModule } from "@/services/EvoluFormationAPI/handleModule";

export type DataItem = {
  id: number;
  title: string;
  category: string;
  amount: number;
  duration: string;
  speciality_bpf: string;
};

const dummyData: DataItem[] = [
  {
    id: 1,
    title: "Projet A",
    category: "Développement",
    amount: 10000,
    duration: "6 mois",
    speciality_bpf: "Technologie",
  },
  {
    id: 2,
    title: "Projet B",
    category: "Marketing",
    amount: 5000,
    duration: "3 mois",
    speciality_bpf: "Communication",
  },
  {
    id: 3,
    title: "Projet C",
    category: "Recherche",
    amount: 15000,
    duration: "12 mois",
    speciality_bpf: "Innovation",
  },
  {
    id: 4,
    title: "Projet D",
    category: "Formation",
    amount: 3000,
    duration: "1 mois",
    speciality_bpf: "Ressources Humaines",
  },
  {
    id: 5,
    title: "Projet E",
    category: "Infrastructure",
    amount: 20000,
    duration: "9 mois",
    speciality_bpf: "Technologie",
  },
];

type SortConfig = {
  key: keyof DataItem;
  direction: "asc" | "desc";
};
const ListModules = () => {
  const [data, setData] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "id",
    direction: "asc",
  });

  useEffect(() => {
    handleModule.findAll().then((res) => {
      if (res.data.data.length !== 0) setData(res.data.data);
      console.log(res);
    });
  }, []);

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
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
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
            {["titre", "categorie", "montant", "duree", "spécialité BPF"].map(
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
