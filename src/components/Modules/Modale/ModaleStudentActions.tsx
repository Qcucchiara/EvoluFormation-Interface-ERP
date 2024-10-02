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
import { FormProspect } from "../Forms/FormProspect";
import { FormTrainer } from "../Forms/FormTrainer";
import { FormStudent } from "../Forms/FormStudent";

export const ModaleStudentActions = ({
  open,
  setOpen,
  item,
  defaultValue,
}: {
  item: any;
  defaultValue?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    console.log("opened?", item);
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Détails de l&#039;&Eacute;tudiant &quot;&quot;:
          </DialogTitle>
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
          <TabsContent value="details">Détails ici</TabsContent>
          <TabsContent value="update">
            {/* <div>
              mêmes infos que dans détails, mais avec des input ghost préremplis
            </div>
            <Button variant={"destructive"}>delete</Button> */}
            <FormStudent defaultValue={item} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
