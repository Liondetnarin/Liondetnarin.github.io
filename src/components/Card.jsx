import { cn } from "../lib/utils"

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
