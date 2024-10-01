import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
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
import { FormProspect } from "../Forms/FormProspect";
import { Input } from "@/components/ui/input";
import { handlePerson } from "@/services/EvoluFormationAPI/handlePerson";
import { useToast } from "@/hooks/use-toast";

export const ModaleProspectActions = ({
  open,
  setOpen,
  item,
  defaultValue,
  setIsReloadNeeded,
}: {
  item: any;
  defaultValue?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsReloadNeeded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { toast } = useToast();
  const [newStatus, setNewStatus] = useState<string>(item.status);
  useEffect(() => {
    console.log("opened?");
  }, [open]);
  function modifyStatus() {
    const data = {
      status: newStatus,
    };
    handlePerson.prospect.update(item.id, data).then((res) => {
      console.log(res);
      toast({ title: "Prospect modifié" });
      setIsReloadNeeded(true);
      // setOpen(false);
    });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Détails du prospect &quot;&quot;:</DialogTitle>
          <DialogDescription>les changements sont définitifs</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={defaultValue ? defaultValue : "details"}>
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
            <br />
            <label>Status</label>
            <Input
              variant={"ghost"}
              defaultValue={item.status}
              onChange={(e) => setNewStatus(e.target.value)}
            />
            {newStatus !== item.status && (
              <Button onClick={modifyStatus}>Modifier</Button>
            )}
          </TabsContent>
          <TabsContent value="update">
            {/* <div>
              mêmes infos que dans détails, mais avec des input ghost préremplis
            </div>
            <Button variant={"destructive"}>delete</Button> */}
            <FormProspect item={item} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
