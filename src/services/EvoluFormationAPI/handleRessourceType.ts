import toast from "react-hot-toast";
import { backend } from "./base";

export const handleRessourceType = {
  create: async (data: unknown) => {
    const result = backend.post("/ressource-type", data);
    toast.promise(
      result,
      {
        loading: "Envoie du formulaire",
        success: (res) => `${res.data.message}`,
        error: (err) =>
          err.response.data.message
            ? `${err.response.data.message}`
            : "Unexpected error",
      },
      { id: "createRessourceType" },
    );
    return await result;
  },
  findAll: async () => {
    const result = backend.get("/ressource-type");
    toast.promise(
      result,
      {
        loading: "Chargement de la liste des catégories",
        success: (res) => `${res.data.message}`,
        error: (err) =>
          err.data.message ? `${err.data.message}` : "Unexpected error",
      },
      { id: "findAllRessourceType" },
    );
    return await result;
  },
  findOne: async (id: string) => {
    const result = backend.get(`/ressource-type/${id}`);
    toast.promise(
      result,
      {
        loading: "",
        success: "",
        error: "",
      },
      { id: "findOneRessourceType" },
    );
    return await result;
  },
  update: async (id: string, data: unknown) => {
    const result = backend.patch(`/ressource-type/${id}`, data);
    toast.promise(
      result,
      {
        loading: "",
        success: "",
        error: "",
      },
      { id: "updateRessourceType" },
    );
    return await result;
  },
  remove: async (id: string) => {
    const result = backend.delete(`/ressource-type/${id}`);
    toast.promise(
      result,
      {
        loading: "Chargement",
        success: (res) => `${res.data.message}`,
        error: (err) =>
          err.data.message ? `${err.data.message}` : "Unexpected error",
      },
      { id: "removeRessourceType" },
    );
    return await result;
  },
};
