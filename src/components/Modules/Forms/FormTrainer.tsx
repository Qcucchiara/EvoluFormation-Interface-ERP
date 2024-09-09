import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PopoverSkill } from "../PopoverSkill";
import { PopoverList } from "../PopoverList";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { trainerForm } from "@/app/utils/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaTrainer } from "@/validator/TrainerValidator";
import InputForm from "@/components/Composites/InputForm";

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
export const FormTrainer = () => {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<trainerForm>({
    mode: "onChange",
    resolver: yupResolver(schemaTrainer),
  });
  const onSubmit: SubmitHandler<trainerForm> = async (data) => {
    console.log(data);
    //TODO plus tard avec le back
  };
  useEffect(() => {
    console.log(selectedNames);
    setValue("skills", []);
    setValue("skills", selectedNames);
  }, [selectedNames]);
  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Formulaire Formateur</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nom">Nom</Label>
            <Input id="nom" placeholder="Entrez votre nom" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="prenom">Prénom</Label>
            <Input id="prenom" placeholder="Entrez votre prénom" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Entrez votre email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tel">Téléphone</Label>
          <Input
            id="tel"
            type="tel"
            placeholder="Entrez votre numéro de téléphone"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tarif">Tarif (€ journalier)</Label>
          <Input
            id="tarif"
            type="number"
            min="0"
            step="0.01"
            placeholder="Entrez votre tarif journalier"
          />
        </div>
        <PopoverList
          listNames={skills}
          setSelectedNames={setSelectedNames}
          selectedNames={selectedNames}
          entityName={"formation"}
        />
        <div className="space-y-2">
          <Label htmlFor="commentaire">Commentaire</Label>
          <Textarea
            id="commentaire"
            placeholder="Ajoutez un commentaire ou des informations supplémentaires"
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Soumettre</Button>
      </CardFooter>
    </Card>
  );
};
