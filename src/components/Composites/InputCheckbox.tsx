import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const InputCheckbox = ({
  formateurId,
  formateurName,
  setFormateur,
}: {
  formateurId: string;
  formateurName: string;
  setFormateur: any;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    isChecked &&
      setFormateur((prev: any) => {
        return [prev, formateurName];
      });
  }, [isChecked]);
  return (
    <div key={formateurId} className="flex items-center space-x-2">
      <Checkbox
        id={formateurId}
        value={formateurId}
        onCheckedChange={() => {
          setIsChecked((prev) => {
            return prev ? false : true;
          });
        }}
      />
      <Label htmlFor={formateurId}>{formateurName}</Label>
    </div>
  );
};

export default InputCheckbox;
