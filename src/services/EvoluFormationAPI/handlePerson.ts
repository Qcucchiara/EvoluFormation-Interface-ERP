import { backend } from "./base";
import handleStatusToaster from "@/utils/handleStatusToaster";

export const handlePerson = {
  prospect: {
    create: async (data: unknown) => {
      const response = backend.post(`/prospect`, data);
      handleStatusToaster(response, "createProspect");

      return await response;
    },
    // skip: number, take: number
    findAll: async () => {
      const response = backend.get(`/prospect`);
      handleStatusToaster(response, "findAllProspects");

      return await response;
    },
    findAllBlacklist: async () => {
      console.log(process.env.NEXT_PUBLIC_API_BACKEND_URL, "ici c'est le .env");
      const response = backend.get(`/prospect/blacklist`);
      handleStatusToaster(response, "findAllBlacklistedProspects");

      return await response;
    },
    findOne: async (id: string) => {
      const response = backend.get(`/prospect/${id}`);
      handleStatusToaster(response, "findOneProspect");

      return await response;
    },
    update: async (id: string, data: unknown) => {
      const response = backend.patch(`/prospect/${id}`, data);
      handleStatusToaster(response, "updateProspect");

      return await response;
    },
    toggleBlacklist: async (id: string) => {
      const response = backend.patch(`/prospect/blacklist/${id}`);
      handleStatusToaster(response, "toggleBlacklistProspect");

      return await response;
    },
    remove: async (id: string) => {
      const response = backend.delete(`/prospect/${id}`);
      handleStatusToaster(response, "removeProspect");

      return await response;
    },
  },
  trainer: {
    create: async (data: unknown) => {
      const response = backend.post("/trainer", data);
      handleStatusToaster(response, "createTrainer");

      return await response;
    },
    // skip: number, take: number
    findAll: async () => {
      const response = backend.get(`/trainer`);
      handleStatusToaster(response, "findAllTrainers");

      return await response;
    },
    findOne: async (id: string) => {
      const response = backend.get(`/trainer/${id}`);
      handleStatusToaster(response, "findOneTrainer");

      return await response;
    },
    update: async (id: string, data: unknown) => {
      const response = backend.patch(`/trainer/${id}`, data);
      handleStatusToaster(response, "updateTrainer");

      return await response;
    },
    remove: async (id: string) => {
      const response = backend.delete(`/trainer/${id}`);
      handleStatusToaster(response, "removeTrainer");

      return await response;
    },
  },
  student: {
    create: async (data: unknown) => {
      const response = backend.post("/student", data);
      handleStatusToaster(response, "createStudent");

      return await response;
    },
    // skip: number, take: number
    findAll: async () => {
      const response = backend.get(`/student`);
      handleStatusToaster(response, "findAllStudents");

      return await response;
    },
    findOne: async (id: string) => {
      const response = backend.get(`/student/${id}`);
      handleStatusToaster(response, "findOneStudent");

      return await response;
    },
    update: async (id: string, data: unknown) => {
      const response = backend.patch(`/student/${id}`, data);
      handleStatusToaster(response, "updateStudent");

      return await response;
    },
    remove: async (id: string) => {
      const response = backend.delete(`/student/${id}`);
      handleStatusToaster(response, "removeStudent");

      return await response;
    },
  },
};
