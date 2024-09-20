import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect } from "react";
import { FormCompany } from "../Forms/FormCompany";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ModaleCompanyActions = ({
  isModalOpen,
  setIsModalOpen,
  selectedEntreprise,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedEntreprise: any;
}) => {
  // useEffect(() => {
  //   console.log("opened?");
  // }, [isModalOpen]);
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTitle hidden>
        <DialogTitle>Actions Entreprises</DialogTitle>
        <DialogDescription>
          des actions possibles a effectuer sur l&apos;entreprise selectionné
        </DialogDescription>
      </DialogTitle>
      <DialogContent>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value={"overview"}>Overview</TabsTrigger>
            <TabsTrigger value={"update"}>Modification</TabsTrigger>
          </TabsList>
          <TabsContent value={"overview"}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedEntreprise?.name}</DialogTitle>
                <DialogDescription>
                  <p>
                    <strong>SIRET:</strong> {selectedEntreprise?.siret}
                  </p>
                  <p>
                    <strong>Address:</strong> {selectedEntreprise?.address}
                  </p>
                  <p>
                    <strong>City:</strong> {selectedEntreprise?.city}
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </TabsContent>
          <TabsContent value={"update"}>
            <FormCompany />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
