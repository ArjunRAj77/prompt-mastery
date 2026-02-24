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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ delay: index * 0.05, duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
          {prompt.category}
        </span>
        <div className="flex -space-x-2">
          {prompt.agents.slice(0, 3).map((agent, i) => (
            <div
              key={i}
              className="w-8 h-8 glass-icon text-[10px] font-bold text-slate-600 dark:text-slate-300 ring-2 ring-white dark:ring-slate-800"
              title={agent}
            >
              {agent[0]}
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {prompt.title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
        {prompt.description}
      </p>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
        <button
          onClick={() => onCopy(prompt.prompt)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group/btn active:scale-95"
        >
          <Copy className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          Copy
        </button>
        <button
          onClick={() => onViewDetails(prompt)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-500/20 group/btn active:scale-95"
        >
          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          View
        </button>
      </div>
    </motion.div>
  );
};

export default PromptCard;
