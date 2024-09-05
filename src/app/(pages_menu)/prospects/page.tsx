"use client";
import LayoutStandard from "@/components/Layouts/LayoutStandard";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import { FormProspect } from "@/components/Modules/Forms/FormProspect";
import ListModules from "@/components/Modules/Lists/ListModules";
import { ModaleModuleActions } from "@/components/Modules/Modale/ModaleModuleActions";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContexteModules } from "@/context/contexteModule";
import React from "react";

const children = () => {
  return (
    <Tabs defaultValue="new" className="h-full flex flex-col">
      <TabsList className="mb-4">
        <TabsTrigger value="new">Nouveau prospect</TabsTrigger>
        <TabsTrigger value="list">Liste prospects</TabsTrigger>
        {/* <TabsTrigger value="other"></TabsTrigger> */}
      </TabsList>
      <TabsContent value="new" className="h-full">
        <div className="bg-card p-4 rounded-lg shadow">
          <FormProspect />
        </div>
      </TabsContent>
      <TabsContent value="list" className="h-full">
        <div className="bg-card p-4 rounded-lg shadow">
          <ListModules />
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
