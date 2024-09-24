"use client";
import LayoutStandard from "@/components/Layouts/LayoutStandard";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import { FormRessource } from "@/components/Modules/Forms/FormRessource";
import ListModules from "@/components/Modules/Lists/ListModules";
import { ListRessources } from "@/components/Modules/Lists/ListRessources";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContexteModules } from "@/context/contexteModule";
import React from "react";

const children = () => {
  return (
    <Tabs defaultValue="list" className="h-full flex flex-col">
      <TabsList className="mb-4">
        <TabsTrigger value="new">Nouvelle ressource</TabsTrigger>
        <TabsTrigger value="list">liste des ressources</TabsTrigger>
      </TabsList>
      <ScrollArea className="flex-1">
        <TabsContent value="new" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <FormRessource />
          </div>
        </TabsContent>
        <TabsContent value="list" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <ListRessources />
          </div>
        </TabsContent>
      </ScrollArea>
    </Tabs>
  );
};

const page = () => {
  return (
    <>
      <ContexteModules.Provider value>{children()}</ContexteModules.Provider>
    </>
  );
};

export default page;
