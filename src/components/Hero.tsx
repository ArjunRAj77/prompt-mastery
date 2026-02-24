import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4 border border-indigo-100 dark:border-indigo-800">
            The Ultimate Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">language of AI.</span>
          </h1>
          <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            A curated gallery of elite prompts for builders, creators, and operators. Unlock the full potential of LLMs with precision and style.
          </p>
        </motion.div>

        <div className="hidden lg:block relative h-[400px] w-full">
           {/* Floating Cards Animation */}
           <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-64 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 z-10"
           >
              <div className="h-2 w-20 bg-indigo-100 dark:bg-indigo-900/50 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
                <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-700 rounded"></div>
                <div className="h-2 w-4/6 bg-slate-100 dark:bg-slate-700 rounded"></div>
              </div>
           </motion.div>

           <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-40 w-64 p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700 z-0"
           >
              <div className="h-2 w-16 bg-purple-100 dark:bg-purple-900/50 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
