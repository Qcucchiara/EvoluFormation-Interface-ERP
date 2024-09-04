import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ModaleModuleActions = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    console.log("opened?");
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger>trigger</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Détails du module "":</DialogTitle>
          <DialogDescription>les changements sont définitifs</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Détails</TabsTrigger>
            <TabsTrigger value="update">Modification</TabsTrigger>
            <TabsTrigger value="other">other</TabsTrigger>
          </TabsList>
          <TabsContent value="details">Détails d'un module ici </TabsContent>
          <TabsContent value="update">
            <div>
              mêmes infos que dans détails, mais avec des input ghost préremplis
            </div>
            <Button variant={"destructive"}>delete</Button>
            {/* <FormModule /> */}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
