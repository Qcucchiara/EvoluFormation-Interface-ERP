import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { UseFormSetValue } from "react-hook-form";

export const InputNumber = ({
  children,
  label,
  step,
  placeholder,
  setValueForm,
  nameInputForm,
  ...props
}: {
  children?: React.ReactNode;
  label: string;
  step: number | string;
  placeholder: string;
  nameInputForm?: string;
  setValueForm?: UseFormSetValue<any>;
}) => {
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    if (setValueForm && nameInputForm) {
      setValueForm(nameInputForm, String(value));
    }
  }, [value]);
  return (
    <div className="space-y-2">
      <Label htmlFor="inputNumber">{label}</Label>
      <div className="flex">
        <Input
          className="rounded-r-none [&::-webkit-inner-spin-button]:appearance-none"
          id="inputNumber"
          type="number"
          min="0"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          step={String(step)}
          placeholder={placeholder}
          {...props}
        />
        <Button
          className="rounded-none"
          variant={"outline"}
          onClick={() => {
            setValue((prev) => Number(step) + prev);
          }}
        >
          <PlusIcon />
        </Button>
        <Button
          className="rounded-l-none"
          variant={"outline"}
          onClick={() => {
            value - Number(step) >= 0
              ? setValue((prev) => prev - Number(step))
              : setValue(0);
          }}
        >
          <MinusIcon />
        </Button>
      </div>
      {children}
    </div>
  );
};
