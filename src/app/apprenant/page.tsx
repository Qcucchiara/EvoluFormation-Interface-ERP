"use client";
import { FormStudent } from "@/components/Modules/Forms/FormStudent";
import { ListStudent } from "@/components/Modules/Lists/ListStudents";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContexteModules } from "@/context/contexteModule";
import React from "react";

const children = () => {
  return (
    <Tabs defaultValue="new" className="flex h-full flex-col">
      <TabsList className="mb-4">
        <TabsTrigger value="new">Nouveau Apprenant</TabsTrigger>
        <TabsTrigger value="list">Liste des Apprenant</TabsTrigger>
      </TabsList>
      <ScrollArea className="flex-1">
        <TabsContent value="new" className="h-full">
          <div className="rounded-lg bg-card p-4 shadow">
            <FormStudent />
          </div>
        </TabsContent>
        <TabsContent value="list" className="h-full">
          <div className="rounded-lg bg-card p-4 shadow">
            <ListStudent />
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
