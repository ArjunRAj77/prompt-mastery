import React from 'react';
import { Prompt } from '../types';
import { Copy, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface PromptCardProps {
  prompt: Prompt;
  onCopy: (text: string) => void;
  onViewDetails: (prompt: Prompt) => void;
  index: number;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, onCopy, onViewDetails, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ delay: index * 0.05, duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 dark:hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-500/10"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative p-6 flex flex-col h-full">
        {/* Header: Category & Agents */}
        <div className="flex items-start justify-between mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:border-violet-200 dark:group-hover:border-violet-800 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            {prompt.category}
          </div>
          
          <div className="flex -space-x-2">
            {prompt.agents.slice(0, 3).map((agent, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-slate-400 shadow-sm z-10 relative group-hover:scale-110 transition-transform duration-300"
                style={{ zIndex: 10 - i }}
                title={agent}
              >
                {agent[0]}
              </div>
            ))}
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-6 flex-grow">
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {prompt.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {prompt.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {prompt.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[10px] font-medium text-slate-400 dark:text-slate-500">#{tag}</span>
            ))}
        </div>

        {/* Action Bar */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
          <button
            onClick={(e) => { e.stopPropagation(); onCopy(prompt.prompt); }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-600"
          >
            <Copy className="w-3.5 h-3.5" />
            Copy
          </button>
          <button
            onClick={() => onViewDetails(prompt)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg shadow-slate-900/10 dark:shadow-white/5 active:scale-95"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PromptCard;
