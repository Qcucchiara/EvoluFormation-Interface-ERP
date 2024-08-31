"use client";
import { FormAuth } from "@/components/Modules/FormAuth";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import { FormProspect } from "@/components/Modules/Forms/FormProspect";
import { FormRessource } from "@/components/Modules/Forms/FormRessource";
import { FormTrainer } from "@/components/Modules/Forms/FormTrainer";
import { FormUnavailibility } from "@/components/Modules/Forms/FormUnavailibility";
import { FormDevis } from "@/components/Modules/Forms/Quote/FormDevis";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const page = () => {
  return (
    <Tabs defaultValue="prospect" className="w-full">
      <TabsList>
        <TabsTrigger value="prospect">Prospect</TabsTrigger>
        <TabsTrigger value="devis">Devis</TabsTrigger>
        <TabsTrigger value="ressource">Ressource</TabsTrigger>
        <TabsTrigger value="module">Module</TabsTrigger>
        <TabsTrigger value="formateur">Formateur</TabsTrigger>
        <TabsTrigger value="absence">Absence</TabsTrigger>
        <TabsTrigger value="login">Connexion</TabsTrigger>
      </TabsList>
      <TabsContent value="prospect">
        <FormProspect />
      </TabsContent>
      <TabsContent value="devis">
        <FormDevis />
      </TabsContent>
      <TabsContent value="ressource">
        <FormRessource />
      </TabsContent>
      <TabsContent value="module">
        <FormModule />
      </TabsContent>
      <TabsContent value="formateur">
        <FormTrainer />
      </TabsContent>
      <TabsContent value="absence">
        <FormUnavailibility />
      </TabsContent>
      <TabsContent value="login">
        <FormAuth />
      </TabsContent>
    </Tabs>
  );
};

export default page;
