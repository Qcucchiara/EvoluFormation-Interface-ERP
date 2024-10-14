"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { capitalizeFirstLetter } from "@/utils/miscellaneous";
import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { ContextTemplateEntity } from "@/context/contextTemplateEntity";
import { CommentsModule } from "../Modules/Comments/CommentsModule";

export type LayoutPropTabsAndChildrens = {
  tabName: string;
  children: React.ReactNode;
};

export const LayoutEntity = (props: LayoutPropTabsAndChildrens[]) => {
  const [entityId, setEntityId] = useState<string | null>(null);
  return (
    <Tabs defaultValue={props[0].tabName} className="flex h-full flex-col">
      <TabsList className="mb-4">
        {props.map((prop: LayoutPropTabsAndChildrens) => {
          return (
            <TabsTrigger value={prop.tabName}>
              {capitalizeFirstLetter(prop.tabName.toLowerCase())}
            </TabsTrigger>
          );
        })}
      </TabsList>
      <ResizablePanelGroup direction="horizontal">
        <ContextTemplateEntity.Provider
          value={{
            entityId,
            setEntityId,
          }}
        >
          <ResizablePanel>
            <ScrollArea className="flex-1">
              {props.map((prop: LayoutPropTabsAndChildrens) => {
                return (
                  <TabsContent value={prop.tabName} className="h-full">
                    <div className="rounded-lg bg-card p-4 shadow">
                      {prop.children}
                    </div>
                  </TabsContent>
                );
              })}
            </ScrollArea>
          </ResizablePanel>
          {entityId && (
            <>
              <ResizableHandle />
              <ResizablePanel>
                <CommentsModule></CommentsModule>
              </ResizablePanel>
            </>
          )}
        </ContextTemplateEntity.Provider>
      </ResizablePanelGroup>
    </Tabs>
  );
};

// Je veux que "optionnalChildren" soit une liste de commentaire qui ne s'affiche que si je clique sur un élément de la liste juste au dessus.
// Je veux que le component "optionnalChildren" soit foolProof, c'est à dire qu'on ne puisse pas appeler le component hors du contexte, ou qu'il
