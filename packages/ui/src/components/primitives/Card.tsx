import * as React from "react";
import { TremorAdapterCard } from "../../adapters/tremor/Card";
export type CardProps = React.ComponentProps<typeof TremorAdapterCard>;
export const Card = React.forwardRef<HTMLDivElement, CardProps>((p, r) => <TremorAdapterCard ref={r} {...p} />);
Card.displayName = "Card";
