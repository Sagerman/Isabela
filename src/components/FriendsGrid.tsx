import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Friend {
  id: string;
  name: string;
  initial: string;
}

const friends: Friend[] = [
  { id: '1', name: 'María', initial: 'M' },
  { id: '2', name: 'Sofía', initial: 'S' },
  { id: '3', name: 'Valentina', initial: 'V' },
];

const FriendsGrid: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {friends.map((friend) => (
          <motion.div key={friend.id} variants={item}>
            <Card className="bg-card text-card-foreground p-8 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-1 flex items-center justify-center mb-8">
                <span className="text-[4rem] md:text-[5rem] font-heading font-medium text-foreground">
                  {friend.initial}
                </span>
              </div>
              <h3 className="text-h2 md:text-[2.5rem] font-heading font-medium text-foreground text-center">
                {friend.name}
              </h3>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FriendsGrid;
