import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";


const Chip = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLParagraphElement>>(
    ({className, ...props}, ref) => {
        const defaultClass = 
        `rounded-xl bg-sunglow text-black px-4 py-1 text-xs`
        return (
            <div ref={ref} 
            className={cn(defaultClass, className)}
            {...props}/>
        )
    }
)
Chip.displayName = 'Chip'

export { Chip }