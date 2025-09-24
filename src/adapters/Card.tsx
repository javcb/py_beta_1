import * as React from "react";
import { cn } from "../utils/cn";
// Example—replace with your kit import:
import { Card as TPCard, CardHeader as TPCardHeader, CardBody as TPCardBody } from "@tailwindplus/ui"

export function Card({ className, children, ...rest }: React.PropsWithChildren<{ className?: string } & React.ComponentProps<typeof TPCard>>) {
  return <TPCard className={cn("card", className)} {...rest}>{children}</TPCard>;
}

export function CardHeader({ className, children, ...rest }: React.PropsWithChildren<{ className?: string } & React.ComponentProps<typeof TPCardHeader>>) {
  return <TPCardHeader className={cn("card-header", className)} {...rest}>{children}</TPCardHeader>;
}

export function CardBody({ className, children, ...rest }: React.PropsWithChildren<{ className?: string } & React.ComponentProps<typeof TPCardBody>>) {
  return <TPCardBody className={cn("card-body", className)} {...rest}>{children}</TPCardBody>;
}
