"use client";
import LayoutStandard from "@/components/Layouts/LayoutStandard";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import { FormTrainer } from "@/components/Modules/Forms/FormTrainer";
import ListModules from "@/components/Modules/Lists/ListModules";
import { ListTrainers } from "@/components/Modules/Lists/ListTrainers";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContexteModules } from "@/context/contexteModule";
import React from "react";

const children = () => {
  return (
    <Tabs defaultValue="new" className="h-full flex flex-col">
      <TabsList className="mb-4">
        <TabsTrigger value="new">Nouveau Formateur</TabsTrigger>
        <TabsTrigger value="list">Liste des formateurs</TabsTrigger>
      </TabsList>
      <ScrollArea className="flex-1">
        <TabsContent value="new" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <FormTrainer />
          </div>
        </TabsContent>
        <TabsContent value="list" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <ListTrainers />
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
