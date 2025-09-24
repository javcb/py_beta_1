import * as React from "react"
import { cn } from "../utils/cn"
// Example—replace with your kit import:
import { Button as TPButton } from "@tailwindplus/ui"

type Props = React.ComponentProps<typeof TPButton> & {
  intent?: "solid" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({ intent="solid", size="md", className, ...rest }: Props) {
  const intentClass = {
    solid: "bg-brand-500 text-white hover:opacity-90",
    outline: "border border-brand-500 text-brand-500 hover:bg-brand-500/10",
    ghost: "text-brand-500 hover:bg-brand-500/10",
  }[intent]
  const sizeClass = { sm: "h-8 px-3 text-sm", md: "h-10 px-4", lg: "h-12 px-5" }[size]

  return <TPButton className={cn(intentClass, sizeClass, className)} {...rest} />
}
