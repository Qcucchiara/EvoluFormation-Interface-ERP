import * as yup from "yup";

export const schemaResource = yup.object().shape({
  name: yup.string().required("Ce champ est requis"),
  type_id: yup.string().required("Ce champ est requis"),
  price: yup.number().required("Ce champ est requis").min(0),
  // adress: yup.string(),
  // postal_code: yup.string(),
  // city: yup.string(),
  // acquisition_date: yup.string(),
});
