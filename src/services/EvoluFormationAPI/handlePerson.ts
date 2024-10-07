import toast from "react-hot-toast";
import { backend } from "./base";

export const handlePerson = {
  prospect: {
    create: async (data: unknown) => {
      try {
        const res = await backend.post(`/prospect`, data);
        if (res.data.statusCode === 201) {
          toast.success(res.data.message);
        }
        return res;
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
    // skip: number, take: number
    findAll: async () => {
      try {
        const res = backend.get(`/prospect`);
        toast.promise(
          res,
          {
            loading: "Chargement de la liste des entreprises",
            success: "Liste chargée correctement",
            error: "Erreur dans le chargement de la liste",
          },
          { id: "findAllProspect" },
        );
        return await res;
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
    findAllBlacklist: async () => {
      console.log(process.env.NEXT_PUBLIC_API_BACKEND_URL, "ici c'est le .env");
      try {
        const res = backend.get(`/prospect/blacklist`);
        toast.promise(
          res,
          {
            loading: "Chargement de la liste des entreprises",
            success: "Liste chargée correctement",
            error: "Erreur dans le chargement de la liste",
          },
          { id: "findAllBlacklist" },
        );
        return await res;
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
    findOne: (id: string) => {
      return backend.get(`/prospect/${id}`);
    },
    update: (id: string, data: unknown) => {
      return backend.patch(`/prospect/${id}`, data);
    },
    toggleBlacklist: (id: string) => {
      return backend.patch(`/prospect/blacklist/${id}`);
    },
    remove: (id: string) => {
      return backend.delete(`/prospect/${id}`);
    },
  },
  trainer: {
    create: (data: unknown) => {
      return backend.post("/trainer", data);
    },
    // skip: number, take: number
    findAll: () => {
      return backend.get(`/trainer`);
    },
    findOne: (id: string) => {
      return backend.get(`/trainer/${id}`);
    },
    update: (id: string, data: unknown) => {
      return backend.patch(`/trainer/${id}`, data);
    },
    remove: (id: string) => {
      return backend.delete(`/trainer/${id}`);
    },
  },
  student: {
    create: (data: unknown) => {
      return backend.post("/student", data);
    },
    // skip: number, take: number
    findAll: () => {
      return backend.get(`/student`);
    },
    findOne: (id: string) => {
      return backend.get(`/student/${id}`);
    },
    update: (id: string, data: unknown) => {
      return backend.patch(`/student/${id}`, data);
    },
    remove: (id: string) => {
      return backend.delete(`/student/${id}`);
    },
  },
};
