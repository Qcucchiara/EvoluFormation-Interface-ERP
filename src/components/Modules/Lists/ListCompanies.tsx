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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ModaleCompanyActions } from "../Modale/ModaleCompanyActions";
import { ListCompanyElement } from "./ListCompanyElement";
import { handleCompany } from "@/services/EvoluFormationAPI";

// Sample data
const entreprises = [
  {
    id: 1,
    name: "Acme Corp",
    siret: "123 456 789 00001",
    address: "123 Main St",
    city: "Paris",
  },
  {
    id: 2,
    name: "TechStart",
    siret: "987 654 321 00002",
    address: "456 Innovation Ave",
    city: "Lyon",
  },
  {
    id: 3,
    name: "GreenEnergy",
    siret: "456 789 123 00003",
    address: "789 Eco Blvd",
    city: "Marseille",
  },
  {
    id: 4,
    name: "DataDrive",
    siret: "321 654 987 00004",
    address: "101 Digital Lane",
    city: "Bordeaux",
  },
  {
    id: 5,
    name: "FoodFusion",
    siret: "789 123 456 00005",
    address: "202 Gourmet Road",
    city: "Toulouse",
  },
];

export const ListCompanies = () => {
  const [selectedEntreprise, setSelectedEntreprise] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (entreprise: any) => {
    setSelectedEntreprise(entreprise);
    setIsModalOpen(true);
  };

  useEffect(() => {
    handleCompany.findAll().then(({ data }) => {
      console.log(data);
      //TODO: envoyer la data dans le useState "selectedEntreprise" pour afficher la liste
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-5 text-2xl font-bold">Liste des Entreprises</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>SIRET</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entreprises.map((entreprise, index) => (
            <ListCompanyElement key={index} entreprise={entreprise} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
