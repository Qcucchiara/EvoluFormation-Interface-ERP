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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FormProspect = () => {
  const [showNewCompany, setShowNewCompany] = useState(false);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Nouveau prospect</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="informations" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="informations">Informations</TabsTrigger>
            <TabsTrigger value="commentaire">Commentaire</TabsTrigger>
          </TabsList>
          <TabsContent value="informations" className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Civilité</Label>
                <RadioGroup defaultValue="M." className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="M." id="civilite-m" />
                    <Label htmlFor="civilite-m">M.</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Mme" id="civilite-mme" />
                    <Label htmlFor="civilite-mme">Mme</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom</Label>
                <Input id="prenom" placeholder="Entrez votre prénom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nom">Nom</Label>
                <Input id="nom" placeholder="Entrez votre nom" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Entrez votre email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tel">Téléphone</Label>
                <Input
                  id="tel"
                  type="tel"
                  placeholder="Entrez votre numéro de téléphone"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">Client</SelectItem>
                    <SelectItem value="fournisseur">Fournisseur</SelectItem>
                    <SelectItem value="partenaire">Partenaire</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Entreprise</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowNewCompany(!showNewCompany)}
                  >
                    {showNewCompany
                      ? "Sélectionner existante"
                      : "Nouvelle Entreprise"}
                  </Button>
                </div>
                {showNewCompany ? (
                  <Input
                    id="nouvelle-entreprise"
                    placeholder="Nom de la nouvelle entreprise"
                  />
                ) : (
                  <Select>
                    <SelectTrigger id="entreprise">
                      <SelectValue placeholder="Sélectionnez une entreprise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entreprise1">Entreprise 1</SelectItem>
                      <SelectItem value="entreprise2">Entreprise 2</SelectItem>
                      <SelectItem value="entreprise3">Entreprise 3</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Adresse</h3>
              <div className="space-y-2">
                <Label htmlFor="rue">N° et Nom de Rue</Label>
                <Input
                  id="rue"
                  placeholder="Entrez votre numéro et nom de rue"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code-postal">Code postal</Label>
                  <Input
                    id="code-postal"
                    placeholder="Entrez votre code postal"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ville">Ville</Label>
                  <Input id="ville" placeholder="Entrez votre ville" />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="commentaire" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="commentaire">Commentaire</Label>
              <Textarea
                id="commentaire"
                placeholder="Ajoutez un commentaire ou des informations supplémentaires"
                className="min-h-[200px]"
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Enregistrer</Button>
      </CardFooter>
    </Card>
  );
};
