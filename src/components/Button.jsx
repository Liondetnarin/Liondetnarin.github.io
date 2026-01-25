import { cn } from "../lib/utils"

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-all hover:scale-105 hover:shadow-lg disabled:pointer-events-none disabled:opacity-50",
        "bg-slate-900 text-white hover:bg-slate-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
