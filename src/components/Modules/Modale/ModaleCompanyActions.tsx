import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { FormCompany } from "../Forms/FormCompany";

export const ModaleCompanyActions = ({
  isModalOpen,
  setIsModalOpen,
  selectedEntreprise,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedEntreprise: any;
}) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
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
