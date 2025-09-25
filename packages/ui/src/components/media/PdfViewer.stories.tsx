import type { Meta, StoryObj } from "@storybook/react";
import { PdfViewer } from "./PdfViewer";

const meta: Meta<typeof PdfViewer> = {
  title: "Media/PdfViewer",
  component: PdfViewer
};
export default meta;

export const Placeholder: StoryObj<typeof PdfViewer> = {
  render: () => (
    <div className="text-sm text-muted">
      Provide a File or URL in your app; Storybook shows the component shell.
      <div className="mt-2 rounded-2xl border p-3">PDF preview area</div>
    </div>
  )
};
