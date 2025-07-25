import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BlogLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

const BlogLayout = ({ sidebar, content }: BlogLayoutProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Columna de artículos (izquierda) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-3/4"
        >
          {content}
        </motion.div>

        {/* Columna de categorías (derecha) */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:w-1/4"
        >
          {sidebar}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogLayout;