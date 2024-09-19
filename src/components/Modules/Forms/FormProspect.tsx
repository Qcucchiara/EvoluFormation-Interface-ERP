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
import { SubmitHandler, useForm } from "react-hook-form";
import { prospectForm } from "@/app/utils/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProspect } from "@/validator/ProspectValidator";
import InputForm from "@/components/Composites/InputForm";
import InputSelectForm from "@/components/Composites/InputSelectForm";
import { handlePerson } from "@/services/EvoluFormationAPI";

export const FormProspect = () => {
  const [showNewCompany, setShowNewCompany] = useState(false);
  const [civility, setCivility] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<prospectForm>({
    mode: "onChange",
    resolver: yupResolver(schemaProspect),
  });
  const onSubmit: SubmitHandler<prospectForm> = async (data) => {
    await handlePerson.prospect.create(data).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    setValue("civility", civility);
    console.log(watch("civility"));
  }, [civility]);
  useEffect(() => {
    setValue("type", type);
  }, [type]);
  useEffect(() => {
    setValue("company", company);
  }, [company]);

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Nouveau prospect</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  <RadioGroup
                    defaultValue="M."
                    className="flex space-x-4"
                    onValueChange={setCivility}
                  >
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
                <InputForm
                  label={"Prénom"}
                  id={"prenom"}
                  placeholder={"Entrez votre prénom"}
                  type={"text"}
                  register={register("first_name")}
                  errors={errors.first_name?.message}
                />
                <InputForm
                  label={"Nom"}
                  id={"nom"}
                  placeholder={"Entrez votre nom"}
                  type={"text"}
                  register={register("last_name")}
                  errors={errors.last_name?.message}
                />
                <InputForm
                  label={"Email"}
                  id={"email"}
                  placeholder={"Entrez votre email"}
                  type={"email"}
                  register={register("email")}
                  errors={errors.email?.message}
                />
                <InputForm
                  label={"Téléphone"}
                  id={"tel"}
                  placeholder={"Entrez votre numéro de téléphone"}
                  type={"tel"}
                  register={register("phone")}
                  errors={errors.phone?.message}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-5">
                  <InputSelectForm
                    id={"type"}
                    label={"Type"}
                    placeholder={"Sélectionnez un type"}
                    state={type}
                    setState={setType}
                    errors={errors.type?.message}
                  >
                    <SelectItem value="client">Client</SelectItem>
                    <SelectItem value="fournisseur">Fournisseur</SelectItem>
                    <SelectItem value="partenaire">Partenaire</SelectItem>
                  </InputSelectForm>
                  {errors.type?.message && type === "" && (
                    <p className="text-red-600">{errors.type.message}</p>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
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
                    <InputForm
                      label={""}
                      id={"nouvelle-entreprise"}
                      placeholder={"Nom de la nouvelle entreprise"}
                      type={"text"}
                      register={register("company")}
                      errors={errors.company?.message}
                    />
                  ) : (
                    <div>
                      <Select onValueChange={setCompany}>
                        <SelectTrigger id="entreprise">
                          <SelectValue placeholder="Sélectionnez une entreprise" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entreprise1">
                            Entreprise 1
                          </SelectItem>
                          <SelectItem value="entreprise2">
                            Entreprise 2
                          </SelectItem>
                          <SelectItem value="entreprise3">
                            Entreprise 3
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.company?.message && company === "" && (
                        <p className="text-red-600">{errors.company.message}</p>
                      )}
                    </div>
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
                    {...register("address.street")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="code-postal">Code postal</Label>
                    <Input
                      id="code-postal"
                      placeholder="Entrez votre code postal"
                      {...register("address.postalCode")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ville">Ville</Label>
                    <Input
                      id="ville"
                      placeholder="Entrez votre ville"
                      {...register("address.city")}
                    />
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
                  {...register("commentary")}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Enregistrer
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
