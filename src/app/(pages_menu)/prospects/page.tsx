"use client";
import LayoutStandard from "@/components/Layouts/LayoutStandard";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import { FormProspect } from "@/components/Modules/Forms/FormProspect";
import BlacklistProspects from "@/components/Modules/Lists/BlacklistProspect";
import ListModules from "@/components/Modules/Lists/ListModules";
import ListProspects from "@/components/Modules/Lists/ListProspects";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContexteModules } from "@/context/contexteModule";
import React from "react";

const children = () => {
  return (
    <Tabs defaultValue="new" className="flex h-full flex-col">
      <TabsList className="fixed w-full">
        <TabsTrigger value="new">Nouveau prospect</TabsTrigger>
        <TabsTrigger value="list">Liste prospects</TabsTrigger>
        <TabsTrigger value="blacklist">Liste des prospects banni</TabsTrigger>
      </TabsList>
      <TabsContent value="new" className="h-full">
        <div className="mt-12 rounded-lg bg-card p-4 shadow">
          <FormProspect />
        </div>
      </TabsContent>
      <TabsContent value="list" className="h-full">
        <div className="rounded-lg bg-card p-4 shadow">
          <ListProspects />
        </div>
      </TabsContent>
      <TabsContent value="blacklist" className="h-full">
        <div className="rounded-lg bg-card p-4 shadow">
          <BlacklistProspects />
        </div>
      </TabsContent>
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
