import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { studentForm } from "@/utils/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaStudent } from "@/validator/StudentValidator";
import { SubmitHandler, useForm } from "react-hook-form";
import { handlePerson } from "@/services/EvoluFormationAPI/handlePerson";

export const FormStudent = ({ defaultValue }: { defaultValue?: any }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<studentForm>({
    mode: "onChange",
    resolver: yupResolver(schemaStudent),
  });
  const onSubmit: SubmitHandler<studentForm> = async (data) => {
    if (!defaultValue) {
      handlePerson.student.create(data).then((res) => {
        console.log(res);
      });
    } else {
      handlePerson.student.update(defaultValue.id, data).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          Formulaire Élève
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nom">Nom</Label>
              <Input
                id="nom"
                placeholder="Entrez le nom"
                defaultValue={defaultValue?.last_name}
                {...register("last_name")}
              />
              {errors.last_name?.message && (
                <p className="text-red-600">{errors.last_name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom</Label>
              <Input
                id="prenom"
                placeholder="Entrez le prénom"
                defaultValue={defaultValue?.first_name}
                {...register("first_name")}
              />
              {errors.first_name?.message && (
                <p className="text-red-600">{errors.first_name.message}</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  defaultValue={defaultValue?.email}
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="tel">Téléphone</Label>
                <Input
                  id="tel"
                  type="tel"
                  placeholder="01 23 45 67 89"
                  defaultValue={defaultValue?.phone}
                  {...register("phone")}
                />
                {errors.phone?.message && (
                  <p className="text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Naissance</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="date-naissance">Date de naissance</Label>
                <Input
                  id="date-naissance"
                  type="date"
                  defaultValue={defaultValue?.birth_date}
                  {...register("birth_date")}
                />
                {errors.birth_date?.message && (
                  <p className="text-red-600">{errors.birth_date.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ville">Ville</Label>
                <Input
                  id="ville"
                  placeholder="Entrez la ville"
                  defaultValue={defaultValue?.city}
                  {...register("city")}
                />
                {errors.city?.message && (
                  <p className="text-red-600">{errors.city.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="code-postal">Code postal</Label>
                <Input
                  id="code-postal"
                  placeholder="Entrez le code postal"
                  defaultValue={defaultValue?.postal_code}
                  {...register("postal_code")}
                />
                {errors.postal_code?.message && (
                  <p className="text-red-600">{errors.postal_code.message}</p>
                )}
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
