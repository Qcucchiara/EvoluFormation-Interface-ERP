"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";

export const FormQuote = () => {
  // TODO: penser a ajouter un cadre, et remodifier des détails
  const [resources, setResources] = useState([
    { name: "", type: "", price: "" },
  ]);

  const addResource = () => {
    setResources([...resources, { name: "", type: "", price: "" }]);
  };

  const removeResource = (index: number) => {
    setResources(resources.filter((_, i) => i !== index));
  };

  const updateResource = (index: number, field: string, value: string) => {
    const updatedResources = resources.map((resource, i) => {
      if (i === index) {
        return { ...resource, [field]: value };
      }
      return resource;
    });
    setResources(updatedResources);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Devis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="mx-auto max-w-4xl space-y-8 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="start-date">Date du devis</Label>
              <Input id="start-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">Date de validité</Label>
              <Input id="end-date" type="date" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="duration">Durée</Label>
              <Input id="duration" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cost">Tarif</Label>
              <Input id="cost" type="number" />
            </div>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Resources
                  <Button type="button" onClick={addResource} className="ml-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Ajout Resource
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {resources.map((resource, index) => (
                  <Card
                    key={index}
                    className="flex items-end space-x-2 border-gray-50 shadow-sm"
                  >
                    <div className="flex-1 space-y-2">
                      <Input
                        variant={"ghost"}
                        variantSize={"sm"}
                        placeholder="Name"
                        value={resource.name}
                        onChange={(e) =>
                          updateResource(index, "name", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Input
                        variant={"ghost"}
                        variantSize={"sm"}
                        placeholder="Type"
                        value={resource.type}
                        onChange={(e) =>
                          updateResource(index, "type", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Input
                        variant={"ghost"}
                        variantSize={"sm"}
                        placeholder="Price"
                        type="number"
                        value={resource.price}
                        onChange={(e) =>
                          updateResource(index, "price", e.target.value)
                        }
                      />
                    </div>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => removeResource(index)}
                      className="aspect-square rounded-full p-0 hover:bg-destructive hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Select>
                <SelectTrigger id="company">
                  <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="company1">Company 1</SelectItem>
                  <SelectItem value="company2">Company 2</SelectItem>
                  <SelectItem value="company3">Company 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="representative">Main Representative</Label>
              <Select>
                <SelectTrigger id="representative">
                  <SelectValue placeholder="Select representative" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rep1">Representative 1</SelectItem>
                  <SelectItem value="rep2">Representative 2</SelectItem>
                  <SelectItem value="rep3">Representative 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="quote-start-date">Start Date</Label>
                <Input id="quote-start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-end-date">End Date</Label>
                <Input id="quote-end-date" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reference">Reference</Label>
              <Input id="reference" type="text" />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Beneficiary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <Label htmlFor="total-cost">Total Cost</Label>
            <Input id="total-cost" type="number" readOnly />
          </div>

          <Button type="submit" className="w-full">
            Submit Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
