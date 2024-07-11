import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";


const Input = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({className, disabled, ...props}, ref) => {
        const defaultClass = 
        `w-full rounded-xl bg-gray p-3 text-xs`
        return (
            <input ref={ref}
            className={cn(defaultClass, className)}
            {...props}/>
        )
    }
)
Input.displayName = 'Input'

export { Input }