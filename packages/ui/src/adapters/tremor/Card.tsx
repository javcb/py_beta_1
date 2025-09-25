import * as React from "react";
import { Card as TremorCard, type CardProps as TremorCardProps } from "@tremor/react";

export const TremorAdapterCard = React.forwardRef<HTMLDivElement, TremorCardProps>(
  ({ className, ...props }, ref) => <TremorCard ref={ref} className={className} {...props} />
);
TremorAdapterCard.displayName = "TremorAdapterCard";
