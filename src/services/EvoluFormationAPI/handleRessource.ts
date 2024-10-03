import toast from "react-hot-toast";
import { backend } from "./base";

export const handleRessource = {
  create: async (data: unknown) => {
    const result = backend.post("/resource", data);
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
      { id: "createRessource" },
    );
    return await result;
  },
  findAll: async () => {
    const result = backend.get("/resource");
    toast.promise(
      result,
      {
        loading: "Chargement de la liste des ressources",
        success: (res) => `${res.data.message}`,
        error: (err) =>
          err.data.message ? `${err.data.message}` : "Unexpected error",
      },
      { id: "findAllRessource" },
    );
    return await result;
  },
  findOne: async (id: string) => {
    const result = backend.get(`/resource/${id}`);
    toast.promise(
      result,
      {
        loading: "",
        success: "",
        error: "",
      },
      { id: "findOneRessource" },
    );
    return await result;
  },
  update: async (id: string, data: unknown) => {
    const result = backend.patch(`/resource/${id}`, data);
    toast.promise(
      result,
      {
        loading: "",
        success: "",
        error: "",
      },
      { id: "updateRessource" },
    );
    return await result;
  },
  remove: async (id: string) => {
    const result = backend.delete(`/resource/${id}`);
    toast.promise(
      result,
      {
        loading: "Chargement",
        success: (res) => `${res.data.message}`,
        error: (err) =>
          err.data.message ? `${err.data.message}` : "Unexpected error",
      },
      { id: "removeRessource" },
    );
    return await result;
  },
};
