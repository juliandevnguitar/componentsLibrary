import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        soft: "bg-primary/10 hover:text-primary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      color: {
        default: "",
        success: [
          "bg-success text-success-foreground hover:bg-success/60",
          "focus-visible:ring-success/20 dark:focus-visible:ring-success/40"
        ].join(" "),
        warning: [
          "bg-warning text-warning-foreground hover:bg-warning/60",
          "focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40"
        ].join(" "),
        error: [
          "bg-error text-error-foreground hover:bg-error/70",
          "focus-visible:ring-error/20 dark:focus-visible:ring-error/40"
        ].join(" "),
        info: [
          "bg-info text-info-foreground hover:bg-info/60",
          "focus-visible:ring-info/20 dark:focus-visible:ring-info/40"
        ].join(" "),
      },
      rounded: {
        default: "rounded-md",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    compoundVariants: [{
      variant: 'outline',
      color: 'error',
      className: 'text-destructive bg-transparent border-destructive  hover:text-error-foreground hover:bg-destructive/70 hover:border-destructive'
    },
    {
      variant: 'outline',
      color: 'success',
      className: 'text-success bg-transparent border-success  hover:text-success-foreground hover:bg-success/70 hover:border-success'
    },
    {
      variant: 'outline',
      color: 'warning',
      className: 'text-warning bg-transparent border-warning  hover:text-warning-foreground hover:bg-warning/70 hover:border-warning'
    },
    {
      variant: 'outline',
      color: 'info',
      className: 'text-info bg-transparent border-info  hover:text-info-foreground hover:bg-info/70 hover:border-info'
    },
    {
      variant: 'soft',
      color: 'error',
      className: 'text-error border-error bg-error/10 hover:text-error-foreground hover:bg-error/70 hover:border-error'
    },
    {
      variant: 'soft',
      color: 'success',
      className: 'text-success border-success bg-success/10 hover:text-success-foreground hover:bg-success/70 hover:border-success'
    },
    {
      variant: 'soft',
      color: 'warning',
      className: 'text-warning border-warning bg-warning/10 hover:text-warning-foreground hover:bg-warning/70 hover:border-warning'
    },
    {
      variant: 'soft',
      color: 'info',
      className: 'text-info border-info bg-info/10 hover:text-info-foreground hover:bg-info/70 hover:border-info'
    }
  ],
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
      rounded: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  color,
  rounded,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, color, rounded, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
