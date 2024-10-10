import { backend } from "./base";
import handleStatusToaster from "@/utils/handleStatusToaster";

export const handleCompany = {
  create: async (data: unknown) => {
    const response = backend.post(`/company`, data);
    handleStatusToaster(response, "createCompany");

    return await response;
  },
  findAll: async () => {
    const response = backend.get("/company");
    handleStatusToaster(response, "findAllCompanies");

    return await response;
  },
  findOne: async (id: string) => {
    const response = backend.get(`/company/${id}`);
    handleStatusToaster(response, "findOneCompany");

    return await response;
  },
  update: async (id: string, data: unknown) => {
    const response = backend.patch(`/company/${id}`, data);
    handleStatusToaster(response, "updateCompany");

    return await response;
  },
  remove: async (id: string) => {
    const response = backend.delete(`/company/${id}`);
    handleStatusToaster(response, "removeCompany");
    return response;
  },
};
