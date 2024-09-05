"use client";
import LayoutStandard from "@/components/Layouts/LayoutStandard";
import { FormCompany } from "@/components/Modules/Forms/FormCompany";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import { ListCompanies } from "@/components/Modules/Lists/ListCompanies";
import ListModules from "@/components/Modules/Lists/ListModules";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContexteModules } from "@/context/contexteModule";
import React from "react";

const children = () => {
  return (
    <Tabs defaultValue="overview" className="h-full flex flex-col">
      <TabsList className="mb-4  translate-y-0">
        <TabsTrigger value="form_entreprise">nouvelle entreprise</TabsTrigger>
        <TabsTrigger value="browsing">liste entreprises</TabsTrigger>
        <TabsTrigger value="other"></TabsTrigger>
      </TabsList>
      <ScrollArea className="flex-1">
        <TabsContent value="form_entreprise" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <FormCompany />
          </div>
        </TabsContent>
        <TabsContent value="browsing" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <ListCompanies />
            {/* TODO: Une fois le module sélectionné, afficher ses détails (peut être en modale, je sais pas) */}
          </div>
        </TabsContent>
        <TabsContent value="other" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Other</h3>
            <p className="text-muted-foreground">
              Ajouter des nouvelles fonctionnalités ici
            </p>
          </div>
        </TabsContent>
      </ScrollArea>
    </Tabs>
  );
};

const page = () => {
  return (
    <>
      {/* <ContexteModules.Provider value> */}
      {children()}
      {/* </ContexteModules.Provider> */}
    </>
  );
};

export default page;
