import * as yup from "yup";

export const schemaCompany = yup.object().shape({
  name: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  siret: yup.number(),
  street: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  postalCode: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  city: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  contacts: yup.array().of(yup.string()),
  students: yup.array().of(yup.string()),
});
