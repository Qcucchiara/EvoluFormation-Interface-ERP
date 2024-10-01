import * as yup from "yup";

let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

export const schemaModule = yup.object().shape({
  title: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  category: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
<<<<<<< HEAD
  speciality_bpf_id: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
  objectifBPF: yup
    .string()
    .required("Ce champ est obligatoire")
    .min(3, "Minimum 3 character"),
=======
  speciality_bpf_id: yup.string(),
  // .required("Ce champ est obligatoire")
  // .min(3, "Minimum 3 character"),
  objective_bpf_id: yup.string(),
  // .required("Ce champ est obligatoire")
  // .min(3, "Minimum 3 character"),
>>>>>>> 5bd6d64a9c62ee901cb8cf75ff427eb7c79f35d4
  amount: yup
    .number()
    .required("Ce champ est obligatoire")
    .positive()
    .test(
      "is-decimal",
      "The amount should be a decimal with maximum two digits after comma",
      (val: any) => {
        if (val != undefined) {
          return patternTwoDigisAfterComma.test(val);
        }
        return true;
      },
    )
    .min(0, "Minimum 0"),
  duration: yup
    .number()
    .required("Ce champ est obligatoire")
    .min(0, "Minimum 0"),
});
