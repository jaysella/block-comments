"use client";

import { cn } from "@/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative w-full h-2 overflow-hidden rounded-full grow bg-slate-100 dark:bg-slate-800">
      <SliderPrimitive.Range className="absolute h-full bg-slate-900 dark:bg-slate-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block w-5 h-5 transition-colors bg-white border-2 rounded-full cursor-ew-resize border-slate-900 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-800" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
