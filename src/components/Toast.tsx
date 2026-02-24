import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-full shadow-lg flex items-center gap-3 min-w-[200px] justify-center">
            <CheckCircle className="w-5 h-5 text-green-400 dark:text-green-600" />
            <span className="font-medium text-sm">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
