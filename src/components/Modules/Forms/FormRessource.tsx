import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { resourceForm } from "@/app/utils/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaResource } from "@/validator/ResourceValidator";
import InputForm from "@/components/Composites/InputForm";
import { handleRessource } from "@/services/EvoluFormationAPI/handleRessource";
import { handleRessourceType } from "@/services/EvoluFormationAPI/handleRessourceType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type RessourceType = {
  id: string;
  name: string;
  slug: string;
};
export const FormRessource = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<resourceForm>({
    mode: "onChange",
    resolver: yupResolver(schemaResource),
  });
  const [listRessourceTypes, setListRessourcetypes] =
    useState<RessourceType[]>();
  const [ressourceTypeId, setRessourceTypeId] = useState("");
  const onSubmit: SubmitHandler<resourceForm> = async (data) => {
    console.log(data);
    handleRessource.create(data).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    setValue("type_id", ressourceTypeId);
    watch("type_id");
  }, [ressourceTypeId]);

  useEffect(() => {
    handleRessourceType.findAll().then((res) => {
      setListRessourcetypes(res.data.data);
    });
  }, []);

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Add Resource</CardTitle>
        <CardDescription>
          Enter the details of the new resource.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <InputForm
            label={"Name"}
            id={"name"}
            placeholder={"Resource name"}
            require={true}
            register={register("name")}
          />
          {/* <div className="hidden">
            <InputForm
              list="resource-types"
              label={"Type"}
              id={"type"}
              placeholder={"Select or type a resource type"}
              register={register("type")}
              require={true}
            />
          </div> */}
          {/* <datalist id="resource-types">
            {ressourceTypes &&
              ressourceTypes.map((type) => {
                return (
                  <option key={type.id} label={type.name} value={type.id}>
                    {type.name}
                  </option>
                );
              })}

            <option value="Physical" />
            <option value="Digital" />
            <option value="Service" />
            <option value="Subscription" />
          </datalist> */}

          <Select onValueChange={setRessourceTypeId}>
            <SelectTrigger>
              <SelectValue placeholder="catégorie"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {listRessourceTypes?.map((type) => {
                return (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              placeholder="0.00"
              min="0"
              step="0.01"
              {...register("price")}
            />
            {errors.price?.message && (
              <p className="text-red-600">{errors.price.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Add Resource
          </Button>
          <Button
            onClick={() => {
              console.log({
                name: watch("name"),
                price: watch("price"),
                type: watch("type_id"),
              });
            }}
          >
            debug
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
