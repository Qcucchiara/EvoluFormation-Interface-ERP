import * as yup from "yup";

export const schemaResource = yup.object().shape({
  name: yup.string().required("Ce champ est requis"),
  type: yup.string().required("Ce champ est requis"),
  price: yup.number().required("Ce champ est requis").min(0),
});
