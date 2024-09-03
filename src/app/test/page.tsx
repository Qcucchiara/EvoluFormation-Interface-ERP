"use client";

import * as React from "react";
import { ComboboxInput } from "@/components/Composites/ComboboxInput";
import LayoutStandard from "@/components/Layouts/LayoutStandard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown, Command } from "lucide-react";
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "angular-universal",
    label: "Angular Universal",
  },
  {
    value: "blitz.js",
    label: "Blitz.js",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
  {
    value: "ember.js",
    label: "Ember.js",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "redwoodjs",
    label: "RedwoodJS",
  },
  {
    value: "hugo",
    label: "Hugo",
  },
  {
    value: "vuepress",
    label: "VuePress",
  },
  {
    value: "jekyll",
    label: "Jekyll",
  },
];

const main = () => {
  return (
    <Tabs defaultValue="overview" className="h-full flex flex-col">
      <TabsList className="mb-4">
        <TabsTrigger value="overview">Overview dossier</TabsTrigger>
        <TabsTrigger value="details">Détails</TabsTrigger>
        <TabsTrigger value="history">Historique</TabsTrigger>
      </TabsList>
      <ScrollArea className="flex-1">
        <TabsContent value="overview" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Aperçu du dossier</h3>
            <p className="text-muted-foreground">
              Informations générales sur le dossier sélectionné.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="details" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Détails du dossier</h3>
            <p className="text-muted-foreground">
              Informations détaillées sur le dossier sélectionné.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="history" className="h-full">
          <div className="bg-card p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              Historique du dossier
            </h3>
            <p className="text-muted-foreground">
              Historique des modifications du dossier sélectionné.
            </p>
          </div>
        </TabsContent>
      </ScrollArea>
    </Tabs>
  );
};

const aside = () => {
  return (
    <div className="h-full flex flex-col p-4">
      <div className="mb-4">
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" className="w-full justify-between">
              Filtre dossiers <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-card p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-1">Dossier {item}</h4>
              <p className="text-sm text-muted-foreground">
                Brève description du dossier {item}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
const notifs = () => {
  return (
    <div className="bg-card p-4 m-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">
        Dernières notifications (non lues)
      </h2>
      <p className="text-muted-foreground">Aucune nouvelle notification</p>
    </div>
  );
};

const page = () => {
  return (
    <main>
      {/* <ComboboxInput inputData={frameworks} defaultValue="Prospects..." /> */}
      <LayoutStandard children={main()} aside={aside()} notifs={notifs()} />
    </main>
  );
};

export default page;
