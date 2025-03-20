"use client";

import { useId } from "react";
import { Switch } from "@radix-ui/react-switch";
import { Label } from "@radix-ui/react-label";

const TodoFilterSwitch = () => {
  const switchId = useId();

  return (
    <div className="flex items-center space-x-2">
      <Switch id={switchId}></Switch>
      <Label htmlFor={switchId}>Completed</Label>
    </div>
  );
};

export default TodoFilterSwitch;
