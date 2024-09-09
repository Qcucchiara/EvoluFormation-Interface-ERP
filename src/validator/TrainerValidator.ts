import * as yup from "yup";

export const schemaTrainer = yup.object().shape({
  firstName: yup.string().required("Ce champ est requis"),
  lastName: yup.string().required("Ce champ est requis"),
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
  rate: yup.number().required("Ce champ est requis").min(0),
  skills: yup
    .array()
    .of(yup.string().required())
    .required()
    .min(1, "Veuillez séléctionner une compétence"),
});
