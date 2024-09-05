import * as yup from "yup";

export const schemaProspect = yup.object().shape({
  civility: yup.string().required("Ce champ est obligatoire"),
  firstName: yup.string().required("Ce champ est obligatoire"),
  lastName: yup.string().required("Ce champ est obligatoire"),
  email: yup
    .string()
    .required("Ce champ est obligatoire")
    .email("Ce n'est pas un email valide"),
  phone: yup
    .string()
    .required("Ce champ est obligatoire")
    .matches(/^[0-9]+$/, "Il ne doit y avoir que des chiffres")
    .min(10, "Doit contenir 10 chiffres")
    .max(10, "Doit contenir 10 chiffres"),
  type: yup.string().required("Ce champ est obligatoire"),
  company: yup.string().required("Ce champ est obligatoire"),
});
