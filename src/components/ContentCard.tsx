import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className={`w-full max-w-4xl ${className}`}
    >
      <Card className="bg-card text-card-foreground p-8 md:p-12 rounded-lg shadow-lg">
        {children}
      </Card>
    </motion.div>
  );
};

export default ContentCard;
