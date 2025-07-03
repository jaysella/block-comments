import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";

export function AnimatedList({ children }: { children: ReactNode }) {
  return (
    <ul>
      <AnimatePresence>{children}</AnimatePresence>
    </ul>
  );
}

export function AnimatedListItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={className}
    >
      {children}
    </motion.li>
  );
}
