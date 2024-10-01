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
import { PopoverList } from "../PopoverList";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { trainerForm } from "@/app/utils/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaTrainer } from "@/validator/TrainerValidator";
import InputForm from "@/components/Composites/InputForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { handlePerson } from "@/services/EvoluFormationAPI/handlePerson";

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
export const FormTrainer = ({ item }: { item?: any }) => {
  const [isSubmited, setIsSubmited] = useState(false);
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
    await handlePerson.trainer.create(data).then((res) => {
      console.log(res);
      toast("Le formateur a été ajouté", {
        description: `le formateur ${data.first_name} a été correctement ajouté à la base de donnée`,
        // action: {
        //   label: "Undo",
        //   onClick: () => console.log("Undo"),
        // },
      });
    });
    // TODO: plus tard avec le back
  };

  useEffect(() => {
    console.log("Compétences sélectionnés:", selectedNames);
    // setValue("skills", []);
    // setValue("skills", selectedNames);
  }, [selectedNames]);
  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Formulaire Formateur</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <Tabs defaultValue="requis">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="requis">Requis</TabsTrigger>
              <TabsTrigger value="commentaire">Commentaire</TabsTrigger>
            </TabsList>
            <TabsContent value="requis">
              <div className="grid grid-cols-2 gap-4">
                <InputForm
                  label={"Nom"}
                  require={true}
                  id={"nom"}
                  placeholder={"Entrez votre nom"}
                  register={register("last_name")}
                  defaultValue={item?.last_name}
                />
                <InputForm
                  require={true}
                  label={"Prénom"}
                  id={"prenom"}
                  placeholder={"Entrez votre prénom"}
                  register={register("first_name")}
                  defaultValue={item?.first_name}
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
                  defaultValue={item?.email}
                />
                <InputForm
                  label={"Téléphone"}
                  id={"tel"}
                  placeholder={"Entrez votre numéro de téléphone"}
                  register={register("phone")}
                  defaultValue={item?.phone}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tarif">Tarif (€ journalier)</Label>
                  <Input
                    id="tarif"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Entrez votre tarif journalier"
                    // {...register("rate")}
                    required
                    defaultValue={item?.rate}
                  />
                  {/* {errors.rate?.message && (
                    <p className="text-red-600">{errors.rate.message}</p>
                  )} */}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Ville</Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Ville d'activité (plusieurs a terme)"
                    defaultValue={item?.city}
                  />
                </div>
              </div>
              <PopoverList
                listNames={skills}
                selectedNames={selectedNames}
                setSelectedNames={setSelectedNames}
                entityName={"compétence"}
              />
              {/* {errors.skills?.message && (
                <p className="text-red-600">{errors.skills.message}</p>
              )} */}
            </TabsContent>
            <TabsContent value="commentaire">
              <div className="space-y-2">
                <Label htmlFor="commentaire">Commentaire</Label>
                <Textarea
                  id="commentaire"
                  placeholder="Ajoutez un commentaire ou des informations supplémentaires"
                  className="min-h-[100px]"
                  // {...register("commentary")}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            // onClick={() => {
            //   setIsSubmited(true);
            // }}
          >
            Soumettre
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
