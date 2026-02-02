"use client";

import React from "react";
import { motion, useInView, useScroll, type Variants } from "framer-motion";
import styles from "./Animate.module.css";

const defaultEase = [0.25, 0.46, 0.45, 0.94] as const;
const staggerDelay = 0.08;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

const defaultTransition = {
  duration: 0.5,
  ease: defaultEase as [number, number, number, number],
};

interface AnimateProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof motion;
  variants?: Variants;
  transition?: object;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function FadeInUp({
  children,
  className,
  as = "div",
  variants = fadeInUp,
  transition = defaultTransition,
  delay = 0,
  once = true,
  amount = 0.2,
}: AnimateProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ ...transition, delay }}
    >
      {children}
    </Component>
  );
}

export function FadeIn({
  children,
  className,
  as = "div",
  variants = fadeIn,
  transition = defaultTransition,
  delay = 0,
  once = true,
  amount = 0.2,
}: AnimateProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ ...transition, delay }}
    >
      {children}
    </Component>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof motion;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  as = "div",
  delayChildren = 0.2,
  staggerChildren = staggerDelay,
  amount = 0.15,
  once = true,
}: StaggerContainerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      ref={ref}
      className={[className, styles.overflowVisible].filter(Boolean).join(" ")}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
        hidden: {},
      }}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof motion;
}

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      variants={fadeInUp}
      transition={defaultTransition}
    >
      {children}
    </Component>
  );
}

/** Wraps a full-width section so it fades in and slides up when it enters the viewport. */
export function SectionReveal({
  children,
  className,
  delay = 0,
  amount = 0.1,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

export { motion, useInView, useScroll };
