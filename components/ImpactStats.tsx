"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Stat = ({ value, label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = Math.ceil(end / (duration / 16));
    const interval = setInterval(() => {
      start += increment;
      if (start > end) start = end;
      setCount(start);
      if (start === end) clearInterval(interval);
    }, 16);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl font-extrabold text-indigo-600">{count}+</div>
      <div className="mt-1 text-sm font-medium text-gray-700">{label}</div>
    </motion.div>
  );
};

export default function ImpactStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <Stat value={2024} label="Cohort Year" />
        <Stat value={50} label="Mentors" />
        <Stat value={372} label="Leaders Empowered" />
        <Stat value={80} label="Job Placement %" />
      </div>
    </section>
  );
}