"use client";
import LayoutStandard from "@/components/Layouts/LayoutStandard";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import ListModules from "@/components/Modules/Lists/ListModules";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContexteModules } from "@/context/contexteModule";
import React from "react";

const children = () => {
  return (
    <Tabs defaultValue="new_module" className="flex h-full flex-col">
      <TabsList className="mb-4">
        <TabsTrigger value="new_module">Nouveau module</TabsTrigger>
        <TabsTrigger value="browsing">Liste des modules</TabsTrigger>
        <TabsTrigger value="other">peut être autre chose</TabsTrigger>
      </TabsList>
      <ScrollArea className="flex-1">
        <TabsContent value="new_module" className="h-full">
          <div className="rounded-lg bg-card p-4 shadow">
            <FormModule />
          </div>
        </TabsContent>
        <TabsContent value="browsing" className="h-full">
          <div className="rounded-lg bg-card p-4 shadow">
            <ListModules />
          </div>
        </TabsContent>
        <TabsContent value="other" className="h-full">
          <div className="rounded-lg bg-card p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold">Other</h3>
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
      <ContexteModules.Provider value>{children()}</ContexteModules.Provider>
    </>
  );
};

export default page;
