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
import { FormModule } from "../Forms/FormModule";
import Link from "next/link";

export const ModaleProspectActions = ({
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Détails du prospect &quot;&quot;:</DialogTitle>
          <DialogDescription>les changements sont définitifs</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Détails</TabsTrigger>
            <TabsTrigger value="update">Modification</TabsTrigger>
            <TabsTrigger value="other">other</TabsTrigger>
            {/* // TODO: Remplacer entrepriseId */}
            <Link href={`/entreprises/entreprise-detail/${"entrepriseId"}`}>
              <Button>Vers page détails</Button>
            </Link>
          </TabsList>
          <TabsContent value="details">
            Détails d&quot;un module ici
          </TabsContent>
          <TabsContent value="update">
            <div>
              mêmes infos que dans détails, mais avec des input ghost préremplis
            </div>
            <Button variant={"destructive"}>delete</Button>
            <FormModule />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
