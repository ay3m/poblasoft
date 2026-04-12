"use client";

import { motion } from "framer-motion";
import {
  fadeUp, fadeIn, slideLeft, slideRight, scaleIn,
  stagger, staggerFast, staggerSlow, staggerItem,
} from "@/lib/animations";

const VIEWPORT = { once: true, amount: 0.15 } as const;

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeIn} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function SlideLeft({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={slideLeft} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function SlideRight({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={slideRight} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={scaleIn} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function StaggerContainerFast({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerFast} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function StaggerContainerSlow({ children, className, delay = 0 }: MotionProps) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={staggerSlow} transition={{ delay }}>
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

export function HoverCard({ children, className }: Omit<MotionProps, "delay">) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedLink({
  children,
  className,
  href,
  target,
  rel,
  onClick,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}
