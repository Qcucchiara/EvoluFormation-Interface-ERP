import { Code } from "lucide-react";
import * as yup from "yup";

export const schemaStudent = yup.object().shape({
  first_name: yup.string().required("Ce champ est requis"),
  last_name: yup.string().required("Ce champ est requis"),
  email: yup.string().email().required("Ce champ est requis"),
  phone: yup.string().required("Ce champ est requis"),
  birth_date: yup.string().required("Ce champ est requis"),
  city: yup.string().required("Ce champ est requis"),
  postal_code: yup.string().required("Ce champ est requis"),
});
