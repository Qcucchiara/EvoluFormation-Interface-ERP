import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const InputForm = ({
  label,
  id,
  placeholder,
  type,
  register,
  errors,
  divCSSAditional,
  labelCSSAditional,
  inputCSSAditional,
  pCSSAditional,
}: {
  label: string;
  id: string;
  placeholder: string;
  type: string;
  register: {};
  errors: string | undefined;
  divCSSAditional?: string;
  labelCSSAditional?: string;
  inputCSSAditional?: string;
  pCSSAditional?: string;
}) => {
  return (
    <div className={`${divCSSAditional} space-y-2`}>
      <Label className={labelCSSAditional} htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className={inputCSSAditional}
      />
      <p className={`${pCSSAditional} text-red-600`}>{errors}</p>
    </div>
  );
};

export default InputForm;
