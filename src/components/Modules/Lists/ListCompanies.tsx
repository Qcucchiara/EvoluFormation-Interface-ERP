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

export type Entreprise = {
  id: string;
  name: string;
  siret: string | null;
  street: string | null;
  postal_code: string | null;
  city: string | null;
  website_link: string | null;
  created_at: string;
  updated_at: string;
};

// Sample data
const data: Entreprise[] = [
  {
    id: "1f41a087-6b74-4fbb-88d7-621c292c7f70",
    name: "Tech Innovators",
    siret: "12345678900014",
    street: "123 Tech Avenue",
    postal_code: "75001",
    city: "Paris",
    website_link: "https://techinnovators.com",
    created_at: "2024-01-10T08:30:00Z",
    updated_at: "2024-09-20T12:45:00Z",
  },
  {
    id: "5d90f16d-b374-47f5-93f3-c2a124af5a64",
    name: "Green Solutions",
    siret: "98765432100023",
    street: "456 Green Street",
    postal_code: "69002",
    city: "Lyon",
    website_link: "https://greensolutions.fr",
    created_at: "2023-09-15T10:12:00Z",
    updated_at: "2024-09-20T14:15:00Z",
  },
  {
    id: "7f2c5b5b-3420-4f6d-ae51-87f751cfb72a",
    name: "Digital Pioneers",
    siret: "15975348620045",
    street: "789 Innovation Blvd",
    postal_code: "33000",
    city: "Bordeaux",
    website_link: null,
    created_at: "2024-05-03T11:45:00Z",
    updated_at: "2024-09-20T10:20:00Z",
  },
  {
    id: "a8b3fcae-5664-4110-87d3-24bb685db2e0",
    name: "Eco Builders",
    siret: "45632178900010",
    street: "12 Greenfield Road",
    postal_code: "13001",
    city: "Marseille",
    website_link: "https://ecobuilders.com",
    created_at: "2022-12-01T09:00:00Z",
    updated_at: "2024-09-20T13:50:00Z",
  },
  {
    id: "b1f4db98-f0b4-4952-9b65-4f30f2825e50",
    name: "StartUp Hub",
    siret: null,
    street: null,
    postal_code: null,
    city: "Toulouse",
    website_link: "https://startuphub.com",
    created_at: "2024-07-11T12:00:00Z",
    updated_at: "2024-09-20T11:30:00Z",
  },
];

export const ListCompanies = () => {
  const [entreprises, setEntreprises] = useState(data);
  const [selectedEntreprise, setSelectedEntreprise] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleRowClick = (entreprise: any) => {
    setSelectedEntreprise(entreprise);
    setIsModalOpen(true);
  };

  useEffect(() => {
    handleCompany.findAll().then((res) => {
      console.log(res);
      setEntreprises(res.data);

      // ODOT: envoyer la data dans le useState "selectedEntreprise" pour afficher la liste
    });
  }, [refresh]);

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
            <TableHead>Dernière édition</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entreprises.map((entreprise, index) => (
            <ListCompanyElement
              key={index}
              entreprise={entreprise}
              setRefresh={setRefresh}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
