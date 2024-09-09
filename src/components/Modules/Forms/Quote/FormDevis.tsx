"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for modules
const modules = [
  { id: 1, name: "Module 1", cost: 100 },
  { id: 2, name: "Module 2", cost: 150 },
  { id: 3, name: "Module 3", cost: 200 },
];

export const FormDevis = () => {
  const [selectedModules, setSelectedModules] = useState<typeof modules>([]);
  const [formationTitle, setFormationTitle] = useState("");

  const handleAddModule = (moduleId: string) => {
    const module = modules.find((m) => m.id.toString() === moduleId);
    if (module && !selectedModules.some((m) => m.id === module.id)) {
      setSelectedModules((prev) => [...prev, module]);
      if (selectedModules.length === 0) {
        setFormationTitle(module.name);
      }
    }
  };

  const handleRemoveModule = (moduleId: number) => {
    setSelectedModules((prev) => prev.filter((m) => m.id !== moduleId));
  };

  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    setTotalCost(selectedModules.reduce((sum, module) => sum + module.cost, 0));
  }, [selectedModules]);

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Nouveau devis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="lastName">Nom</Label>
            <Input id="lastName" placeholder="Nom" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="firstName">Prénom</Label>
            <Input id="firstName" placeholder="Prénom" />
          </div>
          <div className="space-y-2">
            <Label>Civilité</Label>
            <RadioGroup defaultValue="mr" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mr" id="mr" />
                <Label htmlFor="mr">M.</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mrs" id="mrs" />
                <Label htmlFor="mrs">Mme</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input id="phone" type="tel" placeholder="Téléphone" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Nom de l'entreprise (optionnel)</Label>
            <Input id="company" placeholder="Nom de l'entreprise" />
          </div>
        </div>

        <div className="space-y-2">
          changer le type d'adresse pas le format a 3 input
          <Label htmlFor="address">Adresse</Label>
          <Textarea id="address" placeholder="Adresse complète" />
        </div> */}
        <Tabs defaultValue="devis">
          <TabsList>
            <TabsTrigger value="devis">devis</TabsTrigger>
            <TabsTrigger value="module">Sélectionner modules</TabsTrigger>
          </TabsList>
          <TabsContent value="devis">
            <div className="flex items-center justify-end space-x-2">
              <Checkbox id="showAddress" />
              <Label htmlFor="showAddress">
                Afficher l'adresse sur le devis
              </Label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="formationTitle">Titre de formation</Label>
                <Input
                  id="formationTitle"
                  value={formationTitle}
                  onChange={(e) => setFormationTitle(e.target.value)}
                  placeholder="Titre de formation"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="creationDate">Date de création du devis</Label>
                <Input id="creationDate" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="need">Votre besoin</Label>
              <Textarea id="need" placeholder="Décrivez votre besoin" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="formationType">Type de formation</Label>
                <Select>
                  <SelectTrigger id="formationType">
                    <SelectValue placeholder="Sélectionnez le type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter distanciel">
                      inter entreprise (distanciel)
                    </SelectItem>
                    <SelectItem value="inter présentiel">
                      inter entreprise (présentiel)
                    </SelectItem>
                    <SelectItem value="intra distanciel">
                      intra entreprise (distanciel)
                    </SelectItem>
                    <SelectItem value="intra présentiel">
                      intra entreprise (présentiel)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="participants">Nombre de participants</Label>
                <Input id="participants" type="number" min="1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Durée</Label>
                <div className="flex space-x-2">
                  <Input
                    id="duration-days"
                    type="number"
                    min="0"
                    placeholder="Jours"
                  />
                  <Input
                    id="duration-hours"
                    type="number"
                    min="0"
                    placeholder="Heures"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Lieu</Label>
                <Input
                  id="location"
                  placeholder="Adresse du lieu de formation"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trainingDates">Dates de formation</Label>
                <Input id="trainingDates" placeholder="Dates de formation" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="module">
            <div className="space-y-2">
              <Label htmlFor="moduleSelect">Ajouter un module</Label>
              <div className="flex space-x-2">
                <Select onValueChange={handleAddModule}>
                  <SelectTrigger id="moduleSelect">
                    <SelectValue placeholder="Sélectionnez un module" />
                  </SelectTrigger>
                  <SelectContent>
                    {modules.map((module) => (
                      <SelectItem key={module.id} value={module.id.toString()}>
                        {module.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Modules sélectionnés</Label>
              <div className="space-y-2">
                {selectedModules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center justify-between rounded bg-secondary p-2"
                  >
                    <span>
                      {module.name} - {module.cost} €
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveModule(module.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Label htmlFor="totalCost">Tarif total (€)</Label>
            <Input
              id="totalCost"
              value={totalCost}
              onChange={(e) => {
                setTotalCost((prev) => Number(e.target.value));
              }}
              className="font-bold"
            />
          </div>
          <Button className="ml-auto">Créer le devis</Button>
        </div>
      </CardContent>
    </Card>
  );
};
