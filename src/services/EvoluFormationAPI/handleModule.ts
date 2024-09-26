import toast from "react-hot-toast";
import { backend } from "./base";

export const handleModule = {
  create: async (data: unknown) => {
    const result = await backend.post(`/module`, data);
    if (result.data.statusCode === 201) {
      toast.success(result.data.message);
      console.log(result);
    } else {
      toast.error(result.data.message);
    }
    return result;
  },
  findAll: async () => {
    const result = backend.get("/module");
    toast.promise(
      result,
      {
        loading: "Chargement de la liste des modules",
        success: "Liste chargée correctement",
        error: "Erreur dans le chargement de la liste",
      },
      { id: "findAllModules" },
    );

    return await result;
  },
  findOne: async (id: string) => {
    return backend.get(`/module/${id}`);
  },
  update: async (id: string, data: unknown) => {
    const result = backend.patch(`/module/${id}`, data);
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
  remove: async (id: string) => {
    const res = await backend.delete(`/module/${id}`);
    if (res.status !== 200) {
      toast.error(res.data.message);
    } else {
      toast.success(res.data.message);
    }

    return res;
  },
};
