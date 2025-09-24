import { useEffect, useState } from "react"

export default function VarsInspector({ prefix = "--" }: { prefix?: string }) {
  const [vars, setVars] = useState<[string, string][]>([])
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement)
    const names: string[] = []
    for (let i = 0; i < styles.length; i++) names.push(styles[i] as string)
    const pairs = names
      .filter((n) => n.startsWith(prefix))
      .map((n) => [n, styles.getPropertyValue(n).trim()]) as [string, string][]
    setVars(pairs.sort((a, b) => a[0].localeCompare(b[0])))
  }, [prefix])
  return (
    <pre className="p-4 text-xs overflow-auto h-96 bg-bg-muted">
      {JSON.stringify(Object.fromEntries(vars), null, 2)}
    </pre>
  )
}
