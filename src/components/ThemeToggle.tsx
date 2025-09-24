import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [t, setT] = useState<"light"|"dark">("light")
  
  useEffect(() => { 
    document.documentElement.dataset.theme = t 
  }, [t])
  
  return (
    <button 
      className="fixed bottom-4 right-4 rounded-md px-3 py-2 bg-bg-muted"
      onClick={() => setT(t==="light"?"dark":"light")}
    >
      {t === "light" ? "Dark" : "Light"} mode
    </button>
  )
}
