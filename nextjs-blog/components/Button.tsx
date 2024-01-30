import { ButtonProps } from '@headlessui/react'
import {VariantProps, cva} from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant:{
      default: ["hover:bg-primary-hover", "hover:bg-opacity-70"],
      secondary: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100", "hover:bg-opacity-20"]
    },
    size: {
      default: ["rounded-lg", "w-24" ,"h-14", "p-2"],
      icon: ["rounded-lg", "w-14", "h-14", "p-2"]
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

type BtnProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export default function Button({ variant, size, className, ...props }: BtnProps) {
  return (
    <button 
      {...props} 
      className={ twMerge(buttonStyles({ variant, size }), className) } >
    </button>
  )
}