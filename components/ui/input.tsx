"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "size-full bg-transparent ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-zinc-600 placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none text-base",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

const rootVariants = cva(
  "py-1 px-2 flex rounded gap-1 items-center transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        // outline
        default:
          "border ring-zinc-800 ring-zinc-300 focus-within:ring-2 focus-within:ring-offset-2 dark:focus-within:ring-zinc-400 focus-within:ring-offset-white dark:focus-within:ring-offset-black focus-within:ring-zinc-600",

        underlined:
          "border-b-[1px] border-primary/50 focus-within:border-b-2 focus-within:border-primary rounded-none px-0 bg-transparent focus-within:bg-transparent",

        filled: "",

        ghost:
          "bg-transparent dark:bg-transparent dark:text-zinc-100 focus-within:bg-zinc-100 dark:focus-within:bg-zinc-900",
        neubrutalism:
          "border border-zinc-700 rounded-sm shadow-[2px_2px_0px_rgb(82,82,91)] dark:shadow-[2px_2px_0px_rgb(82,82,91)] focus-within:bg-yellow-50 dark:focus-within:bg-zinc-900/40",
        // with floating label
      },
      size: {
        sm: "h-8",
        default: "h-10",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type InputBlockProps = {
  root?: VariantProps<typeof rootVariants> & {
    className?: string
  }
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
} & InputProps

const InputBlock = ({
  root: { size, variant, className } = { size: "default", variant: "default" },
  leftIcon,
  rightIcon,
  ...input
}: InputBlockProps) => (
  <div className={cn(rootVariants({ variant, size, className }))}>
    {leftIcon && <span className="px-1">{leftIcon}</span>}
    <Input {...input} />
    {rightIcon && <span className="px-1">{rightIcon}</span>}
  </div>
)

export { Input, InputBlock }

Input.displayName = "Input"
InputBlock.displayName = "InputBlock"
