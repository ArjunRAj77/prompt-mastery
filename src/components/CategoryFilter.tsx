import { Category } from '../types';
import { motion } from 'motion/react';
import { 
  LayoutGrid, 
  PenTool, 
  Code2, 
  Image as ImageIcon, 
  Briefcase, 
  Megaphone, 
  TrendingUp, 
  Sparkles,
  Palette
} from 'lucide-react';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const categoryIcons: Record<Category, React.ElementType> = {
  'All': LayoutGrid,
  'Content Writing': PenTool,
  'Coding': Code2,
  'Image Generation': ImageIcon,
  'Business': Briefcase,
  'Marketing': Megaphone,
  'Career': TrendingUp,
  'Creative': Sparkles,
  'Productivity': Palette
};

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex space-x-2 md:justify-center min-w-max">
        {categories.map((category, index) => {
          const Icon = categoryIcons[category] || LayoutGrid;
          return (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSelectCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              {category}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
