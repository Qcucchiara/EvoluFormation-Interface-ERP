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
import { FormCompany } from "@/components/Modules/Forms/FormCompany";

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
      {/* <LayoutStandard children={main()} aside={aside()} notifs={notifs()} /> */}
      <FormCompany />
      <div className="min-h-screen flex justify-center p-8">
        <div className="max-w-3xl w-full">
          <div className="sticky top-0 bg-blue-500 text-white p-4 mb-8 rounded">
            <h1 className="text-xl font-bold">Premier élément sticky</h1>
            <p>Je suis sticky jusqu'à ce que l'autre élément me remplace.</p>
          </div>

          <div className="space-y-16">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              convallis, purus eget ultricies tincidunt, velit velit feugiat
              massa, a congue nulla metus ut neque. Sed ultricies nunc ut tortor
              tincidunt, sed facilisis dolor dictum. Vivamus malesuada enim ut
              justo aliquet vehicula. Nulla facilisi. Fusce euismod bibendum
              orci, at interdum nisl hendrerit id.
            </p>
            <p className="text-gray-700">
              Curabitur vitae consequat nisi. Cras viverra ipsum ac mi
              ultricies, eget vehicula eros tempus. Praesent auctor convallis
              magna non dapibus. Suspendisse potenti. Cras volutpat, justo ut
              malesuada ullamcorper, urna velit dignissim metus, in vehicula
              felis nisi eget enim. Nullam dapibus dictum enim, sed pharetra
              eros aliquet nec.
            </p>
            <div className="sticky top-16 bg-green-500 text-white p-4 rounded">
              <h1 className="text-xl font-bold">Deuxième élément sticky</h1>
              <p>Je deviens sticky après le premier élément.</p>
            </div>
            <p className="text-gray-700">
              Vivamus suscipit ligula sit amet ultricies vulputate. Nam
              condimentum eros eget ultricies sodales. Sed sed lectus nec ipsum
              elementum fermentum. Aenean ultricies, lacus in consequat viverra,
              nisi nisi lacinia lacus, nec malesuada augue sapien ut nisi.
            </p>
            <p className="text-gray-700">
              Suspendisse potenti. Nunc pulvinar ligula ac lorem vestibulum, at
              hendrerit lacus iaculis. Aliquam euismod risus ut lectus suscipit,
              in rhoncus erat vehicula. Nulla ut scelerisque urna. Nam dictum
              dolor vel malesuada egestas.
            </p>{" "}
            <p className="text-gray-700">
              Vivamus suscipit ligula sit amet ultricies vulputate. Nam
              condimentum eros eget ultricies sodales. Sed sed lectus nec ipsum
              elementum fermentum. Aenean ultricies, lacus in consequat viverra,
              nisi nisi lacinia lacus, nec malesuada augue sapien ut nisi.
            </p>
            <p className="text-gray-700">
              Suspendisse potenti. Nunc pulvinar ligula ac lorem vestibulum, at
              hendrerit lacus iaculis. Aliquam euismod risus ut lectus suscipit,
              in rhoncus erat vehicula. Nulla ut scelerisque urna. Nam dictum
              dolor vel malesuada egestas.
            </p>{" "}
            <p className="text-gray-700">
              Vivamus suscipit ligula sit amet ultricies vulputate. Nam
              condimentum eros eget ultricies sodales. Sed sed lectus nec ipsum
              elementum fermentum. Aenean ultricies, lacus in consequat viverra,
              nisi nisi lacinia lacus, nec malesuada augue sapien ut nisi.
            </p>
            <p className="text-gray-700">
              Suspendisse potenti. Nunc pulvinar ligula ac lorem vestibulum, at
              hendrerit lacus iaculis. Aliquam euismod risus ut lectus suscipit,
              in rhoncus erat vehicula. Nulla ut scelerisque urna. Nam dictum
              dolor vel malesuada egestas.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
