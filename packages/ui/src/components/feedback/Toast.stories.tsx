import type { Meta, StoryObj } from "@storybook/react";
import { ToastHost, toast } from "./Toast";
import { Button } from "../primitives/Button";

const meta: Meta = { title: "Feedback/Toast" };
export default meta;

export const Demo: StoryObj = {
  render: () => (
    <div className="space-y-2">
      <ToastHost />
      <Button onClick={()=>toast.success("It works!")}>Show success</Button>
    </div>
  )
};
