import { backend } from "./base";
import handleStatusToaster from "@/utils/handleStatusToaster";

export const handleModule = {
  create: async (data: any) => {
    delete data.speciality_bpf_id; //TODO: TEMPORAIRE
    delete data.objective_bpf_id;
    const response = backend.post(`/module`, data);
    handleStatusToaster(response, "createModule");

    return await response;
  },
  findAll: async () => {
    const response = backend.get("/module");
    handleStatusToaster(response, "findAllModules");

    return await response;
  },
  findOne: async (id: string) => {
    const response = backend.get(`/module/${id}`);
    handleStatusToaster(response, "findOneModule");

    return await response;
  },
  update: async (id: string, data: unknown) => {
    const response = backend.patch(`/module/${id}`, data);
    handleStatusToaster(response, "updateModule");

    return await response;
  },
  remove: async (id: string) => {
    const response = backend.delete(`/module/${id}`);
    handleStatusToaster(response, "remoceModule");

    return response;
  },
};
