import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4 border border-indigo-100 dark:border-indigo-800">
          The Ultimate Collection
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Prompt <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Mastery</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          The smart gallery of battle-tested AI prompts. Curated for developers, writers, and creators to unlock the full potential of LLMs.
        </p>
      </motion.div>
    </section>
  );
}
