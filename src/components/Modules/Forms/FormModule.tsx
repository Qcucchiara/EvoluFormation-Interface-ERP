"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export const FormModule = () => {
  const [categories] = useState(["Catégorie 1", "Catégorie 2", "Catégorie 3"]);
  const [domaines] = useState(["Domaine 1", "Domaine 2", "Domaine 3"]);
  const [objectifs] = useState(["Objectif 1", "Objectif 2", "Objectif 3"]);
  const [formateurs] = useState(["Formateur 1", "Formateur 2", "Formateur 3"]);

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Formulaire Module</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="titre">Titre</Label>
            <Input id="titre" placeholder="Entrez le titre du module" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="categorie">Catégorie</Label>
            <Input
              id="categorie"
              list="categories"
              placeholder="Sélectionnez ou entrez une catégorie"
            />
            <datalist id="categories">
              {categories.map((cat, index) => (
                <option key={index} value={cat} />
              ))}
            </datalist>
          </div>
          <div className="space-y-2">
            <Label htmlFor="domaine">Domaine selon BPF</Label>
            <Select>
              <SelectTrigger id="domaine">
                <SelectValue placeholder="Sélectionnez un domaine" />
              </SelectTrigger>
              <SelectContent>
                {domaines.map((dom, index) => (
                  <SelectItem key={index} value={dom}>
                    {dom}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="objectif">Objectif de formation selon BPF</Label>
            <Select>
              <SelectTrigger id="objectif">
                <SelectValue placeholder="Sélectionnez un objectif" />
              </SelectTrigger>
              <SelectContent>
                {objectifs.map((obj, index) => (
                  <SelectItem key={index} value={obj}>
                    {obj}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="montant">Montant (€)</Label>
              <Input
                id="montant"
                type="number"
                min="0"
                step="0.01"
                placeholder="Entrez le montant"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duree">Durée (heures)</Label>
              <Input
                id="duree"
                type="number"
                min="0"
                step="0.5"
                placeholder="Entrez la durée"
              />
            </div>
          </div>
        </div>

        <Card className="space-y-4 p-2">
          <h3 className="text-lg font-semibold">Facultatif</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="formateurs">
              <AccordionTrigger>Formateurs</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {formateurs.map((formateur, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`formateur-${index}`} />
                      <Label htmlFor={`formateur-${index}`}>{formateur}</Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="space-y-2">
            <Label htmlFor="page">Page du site</Label>
            <Input
              id="page"
              type="text"
              placeholder="Entrez l'URL de la page du site"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="commentaire">Commentaire</Label>
            <Textarea
              id="commentaire"
              placeholder="Ajoutez un commentaire ou des informations supplémentaires"
              className="min-h-[100px]"
            />
          </div>
        </Card>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Soumettre</Button>
      </CardFooter>
    </Card>
  );
};
