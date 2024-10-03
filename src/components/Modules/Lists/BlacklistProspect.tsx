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
import { ListProspectElement } from "./ListProspectElement";
import { handlePerson } from "@/services/EvoluFormationAPI/handlePerson";

export type DataItem = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  type: string;
  company: string;
  comments: number;
};

const data: DataItem[] = [
  {
    id: "",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    phone: "555-1234",
    type: "Employee",
    company: "Tech Solutions",
    comments: 3,
  },
  {
    id: "",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@corporatehub.net",
    phone: "555-5678",
    type: "Manager",
    company: "Corporate Hub",
    comments: 5,
  },
  {
    id: "",
    first_name: "Michael",
    last_name: "Brown",
    email: "michael.brown@innovate.com",
    phone: "555-9012",
    type: "Consultant",
    company: "Innovate Inc.",
    comments: 2,
  },
  {
    id: "",
    first_name: "Emily",
    last_name: "Clark",
    email: "emily.clark@businessedge.org",
    phone: "555-3456",
    type: "Director",
    company: "Business Edge",
    comments: 1,
  },

  {
    id: "",
    first_name: "David",
    last_name: "Wilson",
    email: "david.wilson@creativespace.co",
    phone: "555-7890",
    type: "Freelancer",
    company: "Creative Space",
    comments: 4,
  },
];

type SortConfig = {
  key: keyof DataItem;
  direction: "asc" | "desc";
};
const BlacklistProspects = () => {
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [listProspect, setListProspect] = useState<any[]>(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "id",
    direction: "asc",
  });
  useEffect(() => {
    handlePerson.prospect.findAllBlacklist().then((res: any) => {
      setListProspect(res.data.message);
      console.log(res.data.message);
    });
    setIsReloadNeeded(false);
  }, [isReloadNeeded]);
  const sortedData = [...listProspect].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    item.first_name.toLowerCase().includes(searchTerm.toLowerCase()),
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
            {/* `prénom`, "nom", "email", "tel", "type" */}
            {[`first_name`, "last_name", "email", "phone", "type"].map(
              (key) => (
                <TableHead key={key}>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      requestSort(key as keyof DataItem);
                    }}
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
            <ListProspectElement
              setIsReloadNeeded={setIsReloadNeeded}
              key={index}
              item={item}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlacklistProspects;
