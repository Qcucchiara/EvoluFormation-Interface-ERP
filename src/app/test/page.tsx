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
import { PopoverSkill } from "@/components/Modules/PopoverSkill";
import { PopoverList } from "@/components/Modules/PopoverList";

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
    <Tabs defaultValue="overview" className="flex h-full flex-col">
      <TabsList className="mb-4">
        <TabsTrigger value="overview">Overview dossier</TabsTrigger>
        <TabsTrigger value="details">Détails</TabsTrigger>
        <TabsTrigger value="history">Historique</TabsTrigger>
      </TabsList>
      <ScrollArea className="flex-1">
        <TabsContent value="overview" className="h-full">
          <div className="rounded-lg bg-card p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold">Aperçu du dossier</h3>
            <p className="text-muted-foreground">
              Informations générales sur le dossier sélectionné.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="details" className="h-full">
          <div className="rounded-lg bg-card p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold">Détails du dossier</h3>
            <p className="text-muted-foreground">
              Informations détaillées sur le dossier sélectionné.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="history" className="h-full">
          <div className="rounded-lg bg-card p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold">
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
    <div className="flex h-full flex-col p-4">
      <div className="mb-4">
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" className="w-full justify-between">
              Filtre dossiers <ChevronDown className="ml-2 h-4 w-4" />
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
            <div key={item} className="rounded-lg bg-card p-4 shadow">
              <h4 className="mb-1 font-semibold">Dossier {item}</h4>
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
    <div className="m-4 rounded-lg bg-card p-4 shadow">
      <h2 className="mb-2 text-lg font-semibold">
        Dernières notifications (non lues)
      </h2>
      <p className="text-muted-foreground">Aucune nouvelle notification</p>
    </div>
  );
};

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Python",
  "Git",
  "SQL",
  "Docker",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "REST API",
  "GraphQL",
  "Webpack",
  "Agile Methodology",
  "Redux",
  "Jest",
  "Sass",
  "Java",
  "C++",
  "PHP",
  "AWS",
  "Kubernetes",
  "Angular",
];

const page = () => {
  const [selectedNames, setSelectedNames] = React.useState<string[]>([]);

  // React.useEffect(() => {
  //   console.log(selectedNames);
  // }, [selectedNames]);
  return (
    <main>
      {/* <ComboboxInput inputData={frameworks} defaultValue="Prospects..." /> */}
      {/* <LayoutStandard children={main()} aside={aside()} notifs={notifs()} /> */}
      {/* <FormCompany /> */}
      <PopoverList listNames={skills} setSelectedNames={setSelectedNames} />
    </main>
  );
};

export default page;
