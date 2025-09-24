import * as React from "react";

export function ThemeProvider({ theme = "light", children }: React.PropsWithChildren<{ theme?: "light" | "dark" }>) {
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return <>{children}</>;
}
