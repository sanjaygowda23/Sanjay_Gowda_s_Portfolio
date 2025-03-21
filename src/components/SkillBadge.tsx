
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  index: number;
  className?: string;
}

const SkillBadge = ({ skill, index, className }: SkillBadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-foreground m-1 transition-all hover:bg-primary/10 hover:text-primary",
        className
      )}
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;
