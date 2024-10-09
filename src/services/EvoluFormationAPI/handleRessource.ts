import { backend } from "./base";
import handleStatusToaster from "@/utils/handleStatusToaster";

export const handleRessource = {
  create: async (data: unknown) => {
    const response = backend.post("/resource", data);
    handleStatusToaster(response, "createRessource");

    return await response;
  },
  findAll: async () => {
    const response = backend.get("/resource");
    handleStatusToaster(response, "findAllRessource");

    return await response;
  },
  findOne: async (id: string) => {
    const response = backend.get(`/resource/${id}`);
    handleStatusToaster(response, "findOneRessource");

    return await response;
  },
  update: async (id: string, data: unknown) => {
    const response = backend.patch(`/resource/${id}`, data);
    handleStatusToaster(response, "updateRessource");

    return await response;
  },
  remove: async (id: string) => {
    const response = backend.delete(`/resource/${id}`);
    handleStatusToaster(response, "removeRessource");

    return await response;
  },
};
