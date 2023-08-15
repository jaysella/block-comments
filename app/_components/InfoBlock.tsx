import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { InfoIcon } from "lucide-react";

const blockVariants = cva(
  "flex flex-col gap-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border-2 dark:text-white",
  {
    variants: {
      variant: {
        default: "border-blue-300 dark:border-blue-700",
        destructive:
          "border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-950",
      },
      size: {
        default: "py-4 px-6 md:flex-row",
        small: "p-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface InfoBlockProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof blockVariants> {}

const InfoBlock: React.FC<InfoBlockProps> = ({
  className,
  variant,
  size,
  children,
}) => (
  <div className={cn(blockVariants({ variant, size }), className)}>
    <InfoIcon size={19} className={size !== "small" ? "mt-0.5" : ""} />
    <span>{children}</span>
  </div>
);

export default InfoBlock;
// }
