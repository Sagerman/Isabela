import { useState } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PencilIcon, CheckIcon } from 'lucide-react';

interface Friend {
  id: number;
  image: string;
  name: string;
}

interface FriendCardProps {
  friend: Friend;
  delay: number;
  onEditName: (id: number, newName: string) => void;
}

const FriendCard = ({ friend, delay, onEditName }: FriendCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(friend.name);

  const handleSave = () => {
    if (editValue.trim()) {
      onEditName(friend.id, editValue.trim());
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: 'backOut' }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white relative">
          <img
            src={friend.image}
            alt={friend.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
        </div>
        
        {/* Decoración de corazón */}
        <motion.div
          className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-1 rounded-full shadow-lg flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-2xl">💖</span>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="bg-card/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {isEditing || !friend.name ? (
          <>
            <Input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              placeholder="Escribe un nombre..."
              className="bg-background text-foreground border-border text-xl font-headline font-bold w-48"
              autoFocus
            />
            <Button
              onClick={handleSave}
              className="bg-success text-success-foreground hover:bg-success/90 font-normal p-2 w-10 h-10"
              aria-label="Guardar nombre"
            >
              <CheckIcon className="w-5 h-5" strokeWidth={2} />
            </Button>
          </>
        ) : (
          <>
            <p className="text-2xl md:text-3xl font-headline font-bold text-foreground">
              {friend.name}
            </p>
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal p-2 w-10 h-10"
              aria-label="Editar nombre"
            >
              <PencilIcon className="w-5 h-5" strokeWidth={2} />
            </Button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export const Slide4Amigas = () => {
  const [friends, setFriends] = useState<Friend[]>([
    { 
      id: 1,
      image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/imagen-de-whatsapp-2025-10-28-a-las-21-47-16_3fb3ba22.jpg', 
      name: '' 
    },
    { 
      id: 2,
      image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/imagen-de-whatsapp-2025-10-28-a-las-21-47-18_637066c2.jpg', 
      name: '' 
    },
    { 
      id: 3,
      image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/imagen-de-whatsapp-2025-10-28-a-las-21-47-19_8051916f.jpg', 
      name: '' 
    },
  ]);

  const handleEditName = (id: number, newName: string) => {
    setFriends(friends.map(friend => 
      friend.id === id ? { ...friend, name: newName } : friend
    ));
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_2.png"
          alt="pastel blob background"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
      </div>

      {/* Elementos decorativos flotantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        >
          <span className="text-3xl opacity-40">
            {i % 3 === 0 ? '💕' : i % 3 === 1 ? '✨' : '🌸'}
          </span>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full">
        <InteractiveTitle
          text="Mis amigas"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground"
        />

        <AnimatedParagraph delay={1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-16">
            {friends.map((friend, index) => (
              <FriendCard
                key={friend.id}
                friend={friend}
                delay={1.4 + index * 0.2}
                onEditName={handleEditName}
              />
            ))}
          </div>
        </AnimatedParagraph>

        {/* Mensaje especial */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <p className="text-xl md:text-2xl font-headline text-foreground/80 italic">
            "Las mejores amigas hacen los mejores recuerdos" 💕
          </p>
        </motion.div>
      </div>
    </div>
  );
};
