import { backend } from "./base";
import handleStatusToaster from "@/utils/handleStatusToaster";

export const handleRessourceType = {
  create: async (data: unknown) => {
    const response = backend.post("/ressource-type", data);
    handleStatusToaster(response, "createRessourceType");

    return await response;
  },
  findAll: async () => {
    const response = backend.get("/ressource-type");
    handleStatusToaster(response, "findAllRessourceType");

    return await response;
  },
  findOne: async (id: string) => {
    const response = backend.get(`/ressource-type/${id}`);
    handleStatusToaster(response, "findOneRessourceType");

    return await response;
  },
  update: async (id: string, data: unknown) => {
    const response = backend.patch(`/ressource-type/${id}`, data);
    handleStatusToaster(response, "updateRessourceType");

    return await response;
  },
  remove: async (id: string) => {
    const response = backend.delete(`/ressource-type/${id}`);
    handleStatusToaster(response, "removeRessourceType");

    return await response;
  },
};
