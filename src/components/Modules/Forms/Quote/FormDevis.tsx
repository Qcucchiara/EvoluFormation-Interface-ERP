"use client";
import { useState } from "react";
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

// Mock data for modules
const modules = [
  { id: 1, name: "Module 1", cost: 100 },
  { id: 2, name: "Module 2", cost: 150 },
  { id: 3, name: "Module 3", cost: 200 },
];

export const FormDevis = () => {
  const [showAddress, setShowAddress] = useState(false);
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

  const totalCost = selectedModules.reduce(
    (sum, module) => sum + module.cost,
    0
  );

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Nouveau devis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="showAddress"
            checked={showAddress}
            onCheckedChange={setShowAddress}
          />
          <Label htmlFor="showAddress">Afficher l'adresse</Label>
        </div>

        <div className="grid grid-cols-3 gap-4">
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

        {showAddress && (
          <div className="space-y-2">
            <Label htmlFor="address">Adresse</Label>
            <Textarea id="address" placeholder="Adresse complète" />
          </div>
        )}

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
                className="flex items-center justify-between bg-secondary p-2 rounded"
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
                <SelectItem value="presentiel">Présentiel</SelectItem>
                <SelectItem value="distanciel">Distanciel</SelectItem>
                <SelectItem value="mixte">Mixte</SelectItem>
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
            <Input id="location" placeholder="Adresse du lieu de formation" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="trainingDates">Dates de formation</Label>
            <Input id="trainingDates" placeholder="Dates de formation" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <Label htmlFor="totalCost">Tarif total</Label>
            <Input
              id="totalCost"
              value={`${totalCost} €`}
              readOnly
              className="font-bold"
            />
          </div>
          <Button className="ml-auto">Créer le devis</Button>
        </div>
      </CardContent>
    </Card>
  );
};
