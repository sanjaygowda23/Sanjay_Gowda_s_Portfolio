
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className, hoverEffect = true }: CardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={cn(
        "bg-card rounded-xl shadow-sm border border-border/40 overflow-hidden transition-all",
        hoverEffect && "hover:shadow-md hover:border-primary/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
