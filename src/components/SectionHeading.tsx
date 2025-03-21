
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      {subtitle && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3">
            {subtitle}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={headingVariants}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{
          hidden: { opacity: 0, width: 0 },
          visible: {
            opacity: 1,
            width: align === "center" ? "64px" : "40px",
            transition: {
              delay: 0.3,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className={cn(
          "h-1 bg-primary mt-4",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
    </motion.div>
  );
};

export default SectionHeading;
