import { backend } from "./base";
import handleStatusToaster from "@/utils/handleStatusToaster";

export const handleComment = {
  create: async (data: unknown) => {
    const response = backend.post(`/comment`, data);
    handleStatusToaster(response, "createComment");

    return response;
  },
  findAll: async () => {
    const response = backend.get("/comment/all");
    handleStatusToaster(response, "findAllComments");

    return response;
  },
  findAllFromEntity: async (entity_id: string) => {
    const response = backend.get(`/comment/entity/${entity_id}`);
    handleStatusToaster(response, "findAllFromEntityComments");

    return response;
  },
  findCategoriesFromEntity: async (entity_id: string) => {
    const response = backend.get(`/comment/categories/${entity_id}`);

    handleStatusToaster(response, "findAllFromEntityComments");

    return response;
  },
  findOne: async (id: string) => {
    const response = backend.get(`/comment/${id}`);
    handleStatusToaster(response, "findOneComment");

    return response;
  },
  update: async (id: string, data: unknown) => {
    const response = backend.patch(`/comment/${id}`, data);
    handleStatusToaster(response, "updateComment");

    return response;
  },
  remove: async (id: string) => {
    const response = backend.delete(`/comment/${id}`);
    handleStatusToaster(response, "removeComment");

    return response;
  },
};
