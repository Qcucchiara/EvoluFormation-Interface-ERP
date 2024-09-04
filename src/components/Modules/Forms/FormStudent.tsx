import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FormStudent = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          Formulaire Élève
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nom">Nom</Label>
              <Input id="nom" placeholder="Entrez le nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom</Label>
              <Input id="prenom" placeholder="Entrez le prénom" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tel">Téléphone</Label>
                <Input id="tel" type="tel" placeholder="01 23 45 67 89" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Naissance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date-naissance">Date de naissance</Label>
                <Input id="date-naissance" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ville">Ville</Label>
                <Input id="ville" placeholder="Entrez la ville" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="code-postal">Code postal</Label>
                <Input id="code-postal" placeholder="Entrez le code postal" />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Soumettre
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
