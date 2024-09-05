import React, { Dispatch, SetStateAction } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const InputSelectForm = ({
  id,
  label,
  placeholder,
  children,
  setState,
  errors,
  state,
  divCSSAditional,
  labelCSSAditional,
  selectTriggerCSSAditional,
  selectValueCSSAditional,
  selectContentCSSAditional,
}: {
  id: string;
  label: string;
  placeholder: string;
  children: React.ReactNode;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
  errors: string | undefined;
  divCSSAditional?: string;
  labelCSSAditional?: string;
  selectTriggerCSSAditional?: string;
  selectValueCSSAditional?: string;
  selectContentCSSAditional?: string;
}) => {
  return (
    <div className={`${divCSSAditional} space-y-2`}>
      <Label className={labelCSSAditional} htmlFor={id}>
        {label}
      </Label>
      <Select onValueChange={setState}>
        <SelectTrigger className={selectTriggerCSSAditional} id={id}>
          <SelectValue
            className={selectValueCSSAditional}
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent className={selectContentCSSAditional}>
          {children}
        </SelectContent>
      </Select>
      {state === "" && <p className="text-red-600">{errors}</p>}
    </div>
  );
};

export default InputSelectForm;
