"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useState, useEffect, type ReactNode } from "react";
import {
  fadeUp,
  fadeUpSlow,
  staggerContainer,
  staggerContainerSlow,
  noMotion,
  duration,
  ease,
} from "@/lib/animation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Stagger direct children in sequence */
  stagger?: boolean;
  /** Use slower stagger timing — for hero sections */
  slow?: boolean;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

/**
 * Scroll-triggered section wrapper.
 * Works with Astro's client:visible — the component only hydrates when in the
 * viewport, so animating on mount is equivalent to animating on scroll entry.
 * Disables motion when prefers-reduced-motion is set.
 */
export function AnimatedSection({
  children,
  className,
  stagger = false,
  slow = false,
  delay,
}: AnimatedSectionProps) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const variant = reduced
    ? noMotion
    : stagger
    ? slow
      ? staggerContainerSlow
      : staggerContainer
    : slow
    ? fadeUpSlow
    : fadeUp;

  const transitionOverride =
    !stagger && !reduced && delay
      ? { duration: slow ? duration.slow : duration.default, ease: ease.out, delay }
      : undefined;

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      {...(transitionOverride ? { transition: transitionOverride } : {})}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Child item for use inside <AnimatedSection stagger>.
 * Picks up parent stagger timing automatically.
 */
export function AnimatedItem({ children, className }: AnimatedItemProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div className={className} variants={reduced ? noMotion : fadeUp}>
      {children}
    </motion.div>
  );
}
