import { Prompt } from '../types';
import { X, Copy, Tag, Bot, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PromptModalProps {
  prompt: Prompt | null;
  isOpen: boolean;
  onClose: () => void;
  onCopy: (text: string) => void;
}

export default function PromptModal({ prompt, isOpen, onClose, onCopy }: PromptModalProps) {
  if (!prompt) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto border border-slate-200 dark:border-slate-700"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                <div>
                  <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600 dark:text-indigo-400">
                    {prompt.category}
                  </span>
                  <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
                    {prompt.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="mb-6">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {prompt.description}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-4 mb-6 relative group">
                  <pre className="font-mono text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap break-words leading-relaxed">
                    {prompt.content}
                  </pre>
                  <button
                    onClick={() => onCopy(prompt.content)}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      <Bot className="w-4 h-4 text-indigo-500" />
                      Compatible Agents
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {prompt.agents.map((agent) => (
                        <span
                          key={agent}
                          className="px-3 py-1.5 rounded-lg glass-icon text-slate-600 dark:text-slate-300 text-xs font-medium"
                        >
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      <Tag className="w-4 h-4 text-indigo-500" />
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {prompt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-100 dark:border-indigo-800/30"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {prompt.tips && (
                  <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      <Lightbulb className="w-4 h-4" />
                      Pro Tip
                    </h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300/80">
                      {prompt.tips}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium text-sm transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => onCopy(prompt.content)}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium text-sm shadow-sm shadow-indigo-500/20 transition-colors flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy Prompt
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
