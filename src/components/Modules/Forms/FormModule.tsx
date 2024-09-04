"use client";
import { useEffect, useState } from "react";
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
import { useForm, SubmitHandler } from "react-hook-form";
import { instructor, moduleForm } from "@/app/utils/type";
import { schemaModule } from "@/validator/ModuleValidtor";
import { yupResolver } from "@hookform/resolvers/yup";
import InputCheckbox from "@/components/Composites/InputCheckbox";
import { string } from "yup";

export const FormModule = () => {
  const [categories] = useState(["Catégorie 1", "Catégorie 2", "Catégorie 3"]);
  const [domaines] = useState(["Domaine 1", "Domaine 2", "Domaine 3"]);
  const [objectifs] = useState(["Objectif 1", "Objectif 2", "Objectif 3"]);
  const [formateurs] = useState(["Formateur 1", "Formateur 2", "Formateur 3"]);
  const [formateur, setFormateur] = useState<[]>([]);
  const [domaineBPF, setDomaineBPF] = useState<string>("");
  const [objectifBPF, setObjectifBPF] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<moduleForm>({
    mode: "onChange",
    resolver: yupResolver(schemaModule),
  });
  const onSubmit: SubmitHandler<moduleForm> = async (data) => {
    console.log(data);
  };
  useEffect(() => {
    console.log(domaineBPF);
    setValue("domaineBPF", domaineBPF);
    watch("domaineBPF");
  }, [domaineBPF]);
  useEffect(() => {
    setValue("objectifBPF", objectifBPF);
  }, [objectifBPF]);
  useEffect(() => {
    setValue("instructor", formateur);
  }, [formateur]);

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Formulaire Module</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-around">
              <div className="space-y-2">
                <Label htmlFor="titre">Titre</Label>
                <Input
                  id="titre"
                  placeholder="Entrez le titre du module"
                  {...register("title")}
                />
                {errors.title?.message && (
                  <p className="text-red-600">{errors.title.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="categorie">Catégorie</Label>
                <Input
                  id="categorie"
                  list="categories"
                  placeholder="Sélectionnez ou entrez une catégorie"
                  {...register("category")}
                />
                {errors.category?.message && (
                  <p className="text-red-600">{errors.category.message}</p>
                )}
                <datalist id="categories">
                  {categories.map((cat, index) => (
                    <option key={index} value={cat} />
                  ))}
                </datalist>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="domaine">Domaine selon BPF</Label>
              <Select onValueChange={setDomaineBPF}>
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
              {errors.domaineBPF?.message && watch("domaineBPF") === "" && (
                <p className="text-red-600">{errors.domaineBPF?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="objectif">Objectif de formation selon BPF</Label>
              <Select onValueChange={setObjectifBPF}>
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
              {errors.objectifBPF?.message && watch("objectifBPF") === "" && (
                <p className="text-red-600">{errors.objectifBPF?.message}</p>
              )}
            </div>
            <div></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="montant">Montant (€)</Label>
                <Input
                  id="montant"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Entrez le montant"
                  {...register("price")}
                />
                {errors.price?.message && (
                  <p className="text-red-600">{errors.price.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="duree">Durée (heures)</Label>
                <Input
                  id="duree"
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="Entrez la durée"
                  {...register("duration")}
                />
                {errors.duration?.message && (
                  <p className="text-red-600">{errors.duration.message}</p>
                )}
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
                      <InputCheckbox
                        key={index}
                        formateurId={String(index)}
                        formateurName={formateur}
                        setFormateur={setFormateur}
                      />
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
                {...register("link")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="commentaire">Commentaire</Label>
              <Textarea
                id="commentaire"
                placeholder="Ajoutez un commentaire ou des informations supplémentaires"
                className="min-h-[100px]"
                {...register("commentary")}
              />
            </div>
          </Card>
        </CardContent>
        <CardFooter>
          <input
            type="submit"
            value={"Soumettre"}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          />
        </CardFooter>
      </form>
    </Card>
  );
};
