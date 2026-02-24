import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FilterBarProps {
  agents: string[];
  tags: string[];
  selectedAgents: string[];
  selectedTags: string[];
  onToggleAgent: (agent: string) => void;
  onToggleTag: (tag: string) => void;
  onClearFilters: () => void;
}

export default function FilterBar({
  agents,
  tags,
  selectedAgents,
  selectedTags,
  onToggleAgent,
  onToggleTag,
  onClearFilters,
}: FilterBarProps) {
  const hasActiveFilters = selectedAgents.length > 0 || selectedTags.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <Filter className="w-4 h-4" />
          <span>Filters:</span>
        </div>

        <div className="flex-1 flex flex-wrap gap-2">
          {/* Agents Dropdown/List */}
          <div className="flex flex-wrap gap-2">
            {agents.map((agent) => (
              <button
                key={agent}
                onClick={() => onToggleAgent(agent)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  selectedAgents.includes(agent)
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                }`}
              >
                {agent}
              </button>
            ))}
          </div>
          
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2 hidden sm:block" />

          {/* Tags List (Show top 5 or scrollable?) Let's show all for now as there aren't many */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  selectedTags.includes(tag)
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={onClearFilters}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
            >
              <X className="w-3 h-3" />
              Clear
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
