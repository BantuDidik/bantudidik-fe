import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";


const Modal = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLParagraphElement>>(
    ({className, children, ...props}, ref) => {
        const defaultClass = 
        `fixed w-full h-full bg-black/[0.5] flex justify-center items-center`
        return (
            <div ref={ref} 
            className={cn(defaultClass, className)}
            {...props}>
                <div className="bg-white gap-3 flex flex-col text-xs text-center rounded-2xl text-black w-11/12 md:w-1/4 p-7 justify-center items-center">
                    {children}
                </div>
            </div>
        )
    }
)
Modal.displayName = 'Modal'

export { Modal }