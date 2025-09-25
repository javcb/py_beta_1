import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateField } from "./DateField";

const meta: Meta<typeof DateField> = {
  title: "Forms/DateField",
  component: DateField
};
export default meta;

export const Basic: StoryObj<typeof DateField> = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    return <DateField label="Pick a date" value={value} onChange={setValue} />;
  }
};
