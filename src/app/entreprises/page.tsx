import LayoutStandard from "@/components/Layouts/LayoutStandard";
import { FormModule } from "@/components/Modules/Forms/FormModule";
import ListModules from "@/components/Modules/Lists/ListModules";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContexteModules } from "@/context/contexteModule";
import React from "react";

const children = () => {
  return (
    <Tabs defaultValue="overview" className="h-full flex flex-col">
      <TabsList className="mb-4">
        <TabsTrigger value="form_entreprise">nouvelle entreprise</TabsTrigger>
        <TabsTrigger value="browsing">liste entreprises</TabsTrigger>
        {/* <TabsTrigger value="other"></TabsTrigger> */}
      </TabsList>
      <ScrollArea className="flex-1">
        <TabsContent value="new_module" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            {/* <FormModule /> */}
          </div>
        </TabsContent>
        <TabsContent value="browsing" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <ListModules />
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
      <ContexteModules.Provider value>
        <LayoutStandard children={children()} />
      </ContexteModules.Provider>
    </>
  );
};

export default page;
