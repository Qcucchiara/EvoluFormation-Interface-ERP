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
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Formulaire Formateur</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <InputForm
              label={"Nom"}
              require={true}
              id={"nom"}
              placeholder={"Entrez votre nom"}
              register={register("lastName")}
            />
            <InputForm
              require={true}
              label={"Prénom"}
              id={"prenom"}
              placeholder={"Entrez votre prénom"}
              register={register("firstName")}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InputForm
              require={true}
              label={"Email"}
              id={"email"}
              placeholder={"Entrez votre email"}
              register={register("email")}
              errors={errors.email?.message}
            />
            <InputForm
              label={"Téléphone"}
              id={"tel"}
              placeholder={"Entrez votre numéro de téléphone"}
              register={register("phone")}
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
              {...register("rate")}
            />
            {errors.rate?.message && (
              <p className="text-red-600">{errors.rate.message}</p>
            )}
          </div>
          <PopoverList listNames={skills} selectedNames={selectedNames} setSelectedNames={setSelectedNames} />
          {errors.skills?.message && (
            <p className="text-red-600">{errors.skills.message}</p>
          )}
          <div className="space-y-2">
            <Label htmlFor="commentaire">Commentaire</Label>
            <Textarea
              id="commentaire"
              placeholder="Ajoutez un commentaire ou des informations supplémentaires"
              className="min-h-[100px]"
              {...register("commentary")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Soumettre
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
