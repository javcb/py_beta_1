import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  args: { children: "Click me" }
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { intent: "primary" } };
export const Secondary: Story = { args: { intent: "secondary" } };
export const Danger: Story = { args: { intent: "danger" } };
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>
    </div>
  )
};
