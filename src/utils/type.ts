export type moduleForm = {
  title: string;
  category: string;
  domaineBPF: string;
  objectifBPF: string;
  price: number;
  duration: number | string;
  instructor?: [];
  link?: string;
  commentary?: string;
};
export type instructor = {
  instructor: string;
};
export type prospectForm = {
  civility: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  type: string;
  company: string;
  address?: {
    street: string;
    postalCode: string;
    city: string;
  };
  commentary?: string;
};
export type resourceForm = {
  name: string;
  type: string;
  price: number;
};
export type trainerForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rate: string;
  skills: [];
  city: string;
  commentary?: string;
};
