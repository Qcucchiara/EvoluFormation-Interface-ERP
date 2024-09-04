import * as yup from "yup";

export const schemaModule = yup.object().shape({
  title: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  category: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  domaineBPF: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  objectifBPF: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  price: yup
    .number()
    .required("Ce champ est obligatoire")
    .positive()
    .min(0, "Minimum 0"),
  duration: yup
    .number()
    .required("Ce champ est obligatoire")
    .min(0, "Minimum 0"),
});
