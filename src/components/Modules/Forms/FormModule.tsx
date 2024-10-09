"use client";
import { useEffect, useState } from "react";
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
import { moduleForm } from "@/app/utils/type";
import { schemaModule } from "@/validator/ModuleValidtor";
import { yupResolver } from "@hookform/resolvers/yup";
import InputCheckbox from "@/components/Composites/InputCheckbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { handleModule } from "@/services/EvoluFormationAPI/handleModule";

export const FormModule = () => {
  const [categories] = useState(["Catégorie 1", "Catégorie 2", "Catégorie 3"]);
  const [domaines] = useState(["Domaine 1", "Domaine 2", "Domaine 3"]);
  const [objectifs] = useState(["Objectif 1", "Objectif 2", "Objectif 3"]);
  const [formateurs] = useState(["Formateur 1", "Formateur 2", "Formateur 3"]);
  const [formateur, setFormateur] = useState<[]>([]);
  const [speciality_bpf_id, setSpeciality_bpf_id] = useState<
    string | undefined
  >(undefined);
  const [objective_bpf_id, setObjective_bpf_id] = useState<string | undefined>(
    undefined,
  );
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

    await handleModule.create({ ...data }).then((res) => {
      console.log(res);
    });
    console.log(data);
  };
  useEffect(() => {
    console.log(speciality_bpf_id);
    setValue("speciality_bpf_id", speciality_bpf_id);
    watch("speciality_bpf_id");
  }, [speciality_bpf_id]);
  useEffect(() => {
    setValue("objective_bpf_id", objective_bpf_id);
  }, [objective_bpf_id]);
  useEffect(() => {
    setValue("instructor", formateur);
  }, [formateur]);

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Formulaire Module</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <Tabs defaultValue="mandatory">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mandatory">Requis</TabsTrigger>
              <TabsTrigger value="optional">Facultatif</TabsTrigger>
            </TabsList>
            <TabsContent value="mandatory">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="domaine">Spécialité selon BPF</Label>
                    <Select onValueChange={setSpeciality_bpf_id}>
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
                    {errors.speciality_bpf_id?.message &&
                      watch("speciality_bpf_id") === "" && (
                        <p className="text-red-600">
                          {errors.speciality_bpf_id?.message}
                        </p>
                      )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="objectif">
                      Objectif de formation selon BPF
                    </Label>
                    <Select onValueChange={setObjective_bpf_id}>
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
                  {errors.objective_bpf_id?.message &&
                    watch("objective_bpf_id") === "" && (
                      <p className="text-red-600">
                        {errors.objective_bpf_id?.message}
                      </p>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="montant">Montant (€)</Label>
                    <Input
                      className="[&::-webkit-inner-spin-button]:appearance-none"
                      id="montant"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="Entrez le montant"
                      {...register("amount")}
                    />
                    {errors.amount?.message && (
                      <p className="text-red-600">{errors.amount.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    {/* <InputNumber
                      label={"Durée (heures)"}
                      step={1}
                      placeholder={"placeholder test"}
                      nameInputForm="duration"
                      setValueForm={setValue}
                    /> */}
                    <Label htmlFor="duration">Durée (Heures)</Label>
                    <Input
                      className="[&::-webkit-inner-spin-button]:appearance-none"
                      id="duration"
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="durée"
                      {...register("duration")}
                    />
                    {errors.duration?.message && (
                      <p className="text-red-600">{errors.duration.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="optional">
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
                  <Label htmlFor="objectif">objectif de formation</Label>
                  <Input
                    id="objectif"
                    type="text"
                    placeholder="Objectif de formation"
                    {...register("link")}
                  />
                </div>
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
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <input
            type="submit"
            value={"Soumettre"}
            className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          />
        </CardFooter>
      </form>
    </Card>
  );
};
