import * as yup from "yup";

export const schemaTrainer = yup.object().shape({
  first_name: yup.string().required("Ce champ est requis"),
  last_name: yup.string().required("Ce champ est requis"),
  email: yup
    .string()
    .required("Ce champ est requis")
    .email("Ce n'est pas une email valide"),
  phone: yup
    .string()
    .required("Ce champ est obligatoire")
    .matches(/^[0-9]+$/, "Il ne doit y avoir que des chiffres")
    .min(10, "Doit contenir 10 chiffres")
    .max(10, "Doit contenir 10 chiffres"),
  rate: yup.number().min(0),
  // .required("Ce champ est requis")
  skills: yup
    .array()
    .of(yup.string().required())
    .min(1, "Veuillez séléctionner une compétence"),
  city: yup.string(),
  // .required()
});
