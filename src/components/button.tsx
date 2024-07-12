import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";


const Button = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    ({className, disabled, ...props}, ref) => {
        const defaultClass = 
        `p-2 w-full hover:bg-carmine text-sm font-semibold rounded-xl bg-rose text-white ${disabled && 'bg-[#8B8B8B] hover:bg-[#8B8B8B]'}`
        return (
            <button ref={ref} 
            className={cn(defaultClass, className)}
            disabled={disabled}
            {...props}/>
        )
    }
)
Button.displayName = 'Button'

export { Button }