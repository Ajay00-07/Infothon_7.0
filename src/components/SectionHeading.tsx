import { motion } from "framer-motion";

import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
  >
    <div className="inline-block px-6 py-2.5 rounded-2xl border border-primary/20 bg-[#050907]/40 backdrop-blur-md shadow-[0_0_15px_rgba(124,255,79,0.06)] mb-4">
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-wider">
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 rounded-full" />
  </motion.div>
);

export default SectionHeading;
