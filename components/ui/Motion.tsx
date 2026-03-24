"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, slideLeft, slideRight, stagger, staggerItem } from "@/lib/animations";

const VIEWPORT = { once: true, amount: 0.2 } as const;

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideLeft({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={slideLeft}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideRight({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={slideRight}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={stagger}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Omit<MotionProps, "delay">) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
