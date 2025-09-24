import * as React from "react";
import { cn } from "../utils/cn";

export function Card({ className, children, ...rest }: React.PropsWithChildren<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn("card", className)} {...rest}>{children}</div>;
}

export function CardHeader({ className, children, ...rest }: React.PropsWithChildren<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn("card-header", className)} {...rest}>{children}</div>;
}

export function CardBody({ className, children, ...rest }: React.PropsWithChildren<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn("card-body", className)} {...rest}>{children}</div>;
}
