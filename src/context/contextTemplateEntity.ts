import { AxiosResponse } from "axios";
import { createContext } from "react";

type typeContextTemplateEntity = {
  entityId: string | null;
  setEntityId: React.Dispatch<React.SetStateAction<string | null>>;
  // listComments: unknown[] | undefined;
  // setListComments: React.Dispatch<React.SetStateAction<undefined>>;
};

export const ContextTemplateEntity = createContext<typeContextTemplateEntity>({
  entityId: "",
  setEntityId: () => {},
  // listComments: [],
  // setListComments: () => {},
});
