export type moduleForm = {
  title: string;
  category: string;
  speciality_bpf_id?: string;
  objective_bpf_id?: string;
  amount: number;
  duration: number;
  instructor?: [];
  link?: string;
  commentary?: string;
};
export type instructor = {
  instructor: string;
};
export type prospectForm = {
  civility: string;
  first_name: string;
  last_name: string;
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
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  // rate: number;
  // skills: string[];
  // commentary?: string;
};
