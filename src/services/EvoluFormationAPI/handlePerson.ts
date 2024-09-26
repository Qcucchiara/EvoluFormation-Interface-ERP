import { backend } from "./base";

export const handlePerson = {
  prospect: {
    create: (data: unknown) => {
      console.log("ici");
      return backend.post("/prospect", data);
    },
    // skip: number, take: number
    findAll: () => {
      console.log("la");
      return backend.get(`/prospect`);
    },
    findOne: (id: string) => {
      return backend.get(`/prospect/${id}`);
    },
    update: (id: string, data: unknown) => {
      return backend.patch(`/prospect/${id}`, data);
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
