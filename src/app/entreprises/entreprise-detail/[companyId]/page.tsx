import { FormStudent } from "@/components/Modules/Forms/FormStudent";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { companyId: string } }) => {
  return (
    <div>
      <div>{params.companyId.replace("'", "&apos;")}</div>
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="details">Détails</TabsTrigger>
          <TabsTrigger value="student">Stagiaires</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Tabs defaultValue="infos" className="w-full">
            <TabsList>
              <TabsTrigger value="infos">Infos</TabsTrigger>
              <TabsTrigger value="folders">Dossiers</TabsTrigger>
            </TabsList>
            <TabsContent value="infos"></TabsContent>
            <TabsContent value="folders">
              Liste des dossiers lié a une entreprise || overview du dossier de
              l&apos;entreprise
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="student">
          <Tabs defaultValue="list">
            <TabsList>
              <TabsTrigger value="list">Liste</TabsTrigger>
              <TabsTrigger value="new">Nouveau Stagiaire</TabsTrigger>
            </TabsList>
            <TabsContent value="list"></TabsContent>
            <TabsContent value="new">
              <FormStudent />
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>

      {/* <ul>
        <li>détail entreprise/prospect lié/ etc...</li>
        <li>liste des élèves</li>
        <li>formulaire nouvel élève</li>
        <li>formulaire update entreprise</li>
        <li>je sais pas quoi d&apos;autre encore</li>
      </ul> */}
    </div>
  );
};

export default page;
