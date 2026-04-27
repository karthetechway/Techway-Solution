import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
    
    const variants = {
      default:
        "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5",
      secondary:
        "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5",
      outline:
        "border-2 border-border bg-transparent hover:border-primary hover:text-primary hover:bg-primary/5",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
    };

    const sizes = {
      default: "h-12 px-6 py-3",
      sm: "h-9 rounded-lg px-4 text-sm",
      lg: "h-14 rounded-2xl px-8 text-lg",
      icon: "h-12 w-12",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
