import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import PromptCard from './components/PromptCard';
import PromptModal from './components/PromptModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';
import MobileFilterSheet from './components/MobileFilterSheet';
import promptsData from './data/prompts.json';
import { Prompt, Category } from './types';
import { AnimatePresence, motion } from 'motion/react';
import { Filter } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const categories: Category[] = [
    'All',
    'Content Writing',
    'Coding',
    'Image Generation',
    'Business',
    'Marketing',
    'Career',
    'Creative',
  ];

  const allPrompts = promptsData as unknown as Prompt[];

  // Extract unique agents and tags
  const allAgents = useMemo(() => Array.from(new Set(allPrompts.flatMap(p => p.agents))), [allPrompts]);
  const allTags = useMemo(() => Array.from(new Set(allPrompts.flatMap(p => p.tags))), [allPrompts]);

  const filteredPrompts = useMemo(() => {
    return allPrompts.filter((prompt) => {
      const matchesCategory = selectedCategory === 'All' || prompt.category === selectedCategory;
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesAgents = selectedAgents.length === 0 || selectedAgents.some(agent => prompt.agents.includes(agent));
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => prompt.tags.includes(tag));

      return matchesCategory && matchesSearch && matchesAgents && matchesTags;
    });
  }, [selectedCategory, searchQuery, selectedAgents, selectedTags, allPrompts]);

  const toggleAgent = (agent: string) => {
    setSelectedAgents(prev => 
      prev.includes(agent) ? prev.filter(a => a !== agent) : [...prev, agent]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedAgents([]);
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-[#F7F7FA] dark:bg-[#0B0F19] transition-colors duration-300 font-sans selection:bg-indigo-500/30">
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main>
        <Hero />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden px-4 mb-6">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium shadow-sm"
          >
            <Filter className="w-4 h-4" />
            Advanced Filters
            {(selectedAgents.length > 0 || selectedTags.length > 0) && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs">
                {selectedAgents.length + selectedTags.length}
              </span>
            )}
          </button>
        </div>

        {/* Desktop Filter Bar */}
        <div className="hidden lg:block">
          <FilterBar
            agents={allAgents}
            tags={allTags}
            selectedAgents={selectedAgents}
            selectedTags={selectedTags}
            onToggleAgent={toggleAgent}
            onToggleTag={toggleTag}
            onClearFilters={clearFilters}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <AnimatePresence mode='wait'>
            {filteredPrompts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredPrompts.map((prompt, index) => (
                  <PromptCard
                    key={prompt.id}
                    prompt={prompt}
                    index={index}
                    onCopy={handleCopy}
                    onViewDetails={setSelectedPrompt}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">
                  No prompts found
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />

      <PromptModal
        prompt={selectedPrompt}
        isOpen={!!selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
        onCopy={handleCopy}
      />

      <MobileFilterSheet
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        agents={allAgents}
        tags={allTags}
        selectedAgents={selectedAgents}
        selectedTags={selectedTags}
        onToggleAgent={toggleAgent}
        onToggleTag={toggleTag}
        onClearFilters={clearFilters}
      />

      <Toast
        message="Copied to clipboard ✓"
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}

export default App;
