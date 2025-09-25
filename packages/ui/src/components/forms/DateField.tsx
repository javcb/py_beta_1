import * as React from "react";
import type { DayPickerProps } from "../../adapters/day-picker";
import { DayPicker } from "../../adapters/day-picker";

export type DateFieldProps = {
  value?: Date;
  onChange?: (d?: Date) => void;
  className?: string;
  dayPickerProps?: Omit<DayPickerProps, "mode" | "selected" | "onSelect" | "classNames">;
  label?: string;
  helpText?: string;
};

export function DateField({
  value,
  onChange,
  className = "",
  dayPickerProps,
  label,
  helpText
}: DateFieldProps) {
  return (
    <div className={["space-y-2", className].join(" ")}>
      {label ? <label className="block text-sm font-medium">{label}</label> : null}
      <div className="rounded-2xl border bg-white p-3 shadow-sm dark:bg-zinc-900">
        <DayPicker
          mode="single"
          selected={value}
          onSelect={onChange}
          className="rdp text-sm"
          classNames={{
            caption: "flex justify-between items-center px-2 py-2",
            nav_button: "h-7 w-7 rounded-md hover:bg-black/5 dark:hover:bg-white/10",
            table: "w-full border-collapse",
            head_row: "text-left",
            head_cell: "px-2 py-1 text-gray-500 font-medium",
            row: "",
            cell: "p-0",
            day: "h-9 w-9 rounded-md hover:bg-black/5 aria-selected:bg-brand-600 aria-selected:text-white",
            day_today: "ring-1 ring-brand-600",
            day_outside: "text-gray-400",
            day_disabled: "opacity-40",
            footer: "px-2 py-2"
          }}
          {...dayPickerProps}
        />
      </div>
      {helpText ? <p className="text-xs text-gray-500">{helpText}</p> : null}
    </div>
  );
}
