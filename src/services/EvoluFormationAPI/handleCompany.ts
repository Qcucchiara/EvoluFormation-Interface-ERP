import toast from "react-hot-toast";
import { backend } from "./base";

export const handleCompany = {
  create: async (data: unknown) => {
    const res = await backend.post(`/company`, data);
    if (res.data.statusCode === 201) {
      toast.success(res.data.message);
      console.log(res);
    } else {
      toast.error(res.data.message);
    }
    return res;
  },
  findAll: async () => {
    const result = backend.get("/company");
    toast.promise(
      result,
      {
        loading: "Chargement de la liste des entreprises",
        success: "Liste chargée correctement",
        error: "Erreur dans le chargement de la liste",
      },
      { id: "findAllCompanies" },
    );

    return await result;
  },
  findOne: (id: string) => {
    return backend.get(`/company/${id}`);
  },
  update: (id: string, data: unknown) => {
    return backend.patch(`/company/${id}`, data);
  },
  remove: async (id: string) => {
    const res = await backend.delete(`/company/${id}`);
    if (res.status !== 200) {
      toast.error(res.data.message);
    } else {
      toast.success(res.data.message);
    }

    return res;
  },
};
