import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  agents: string[];
  tags: string[];
  selectedAgents: string[];
  selectedTags: string[];
  onToggleAgent: (agent: string) => void;
  onToggleTag: (tag: string) => void;
  onClearFilters: () => void;
}

export default function MobileFilterSheet({
  isOpen,
  onClose,
  agents,
  tags,
  selectedAgents,
  selectedTags,
  onToggleAgent,
  onToggleTag,
  onClearFilters,
}: MobileFilterSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl border-t border-slate-200 dark:border-slate-700 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                  Filters
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    AI Agents
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agents.map((agent) => (
                      <button
                        key={agent}
                        onClick={() => onToggleAgent(agent)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
                          selectedAgents.includes(agent)
                            ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {agent}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => onToggleTag(tag)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
                          selectedTags.includes(tag)
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={onClearFilters}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
                >
                  Show Results
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
