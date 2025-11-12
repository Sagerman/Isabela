import { useState } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, Trash2Icon } from 'lucide-react';

// --- ¡CAMBIO! Importamos tu nuevo GIF de fondo ---
import fondoAnimado from '../../assets/slide10-fondo.gif';

interface Meta {
  id: string;
  text: string;
}

export const Slide10Metas = () => {
  const [metasCorto, setMetasCorto] = useState<Meta[]>([
    { id: '1', text: 'Terminar el año escolar con excelentes notas' },
    { id: '2', text: 'Aprender una nueva habilidad (ej: inglés básico)' },
  ]);

  const [metasLargo, setMetasLargo] = useState<Meta[]>([
    { id: '1', text: 'Graduarme de la universidad' },
    { id: '2', text: 'Viajar y conocer nuevas culturas' },
    { id: '3', text: 'Ser independiente' },
  ]);

  const [inputCorto, setInputCorto] = useState('');
  const [inputLargo, setInputLargo] = useState('');

  const handleAddCorto = () => {
    if (inputCorto.trim()) {
      setMetasCorto([...metasCorto, { id: Date.now().toString(), text: inputCorto.trim() }]);
      setInputCorto('');
    }
  };

  const handleAddLargo = () => {
    if (inputLargo.trim()) {
      setMetasLargo([...metasLargo, { id: Date.now().toString(), text: inputLargo.trim() }]);
      setInputLargo('');
    }
  };

  const handleDeleteCorto = (id: string) => {
    setMetasCorto(metasCorto.filter(meta => meta.id !== id));
  };

  const handleDeleteLargo = (id: string) => {
    setMetasLargo(metasLargo.filter(meta => meta.id !== id));
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32 py-16">
      
      {/* --- ¡CAMBIO! Fondo reemplazado por tu GIF --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondoAnimado} // 1. Usamos tu GIF
          alt="Fondo animado de metas" // 2. Cambiamos el alt
          className="w-full h-full object-cover" // 3. Quitamos 'opacity-30'
          loading="lazy"
        />
      </div>

      {/* Cohete flotante (CONSERVADO) */}
      <motion.div
        className="absolute bottom-10 right-10 z-20"
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="text-7xl">🚀</div>
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl w-full">
        <InteractiveTitle
          text="Mis Metas"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-12 text-center text-foreground"
        />

        <AnimatedParagraph delay={1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {/* --- ¡CAMBIO DE ESTÉTICA! Tarjeta de vidrio oscuro --- */}
              <Card className="bg-black/20 backdrop-blur-sm text-white p-8 rounded-3xl shadow-xl border-2 border-white/30 h-full">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-4xl">⏱️</span>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white">
                    A Corto Plazo
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <AnimatePresence>
                    {metasCorto.map((meta) => (
                      <motion.div
                        key={meta.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        // --- ¡CAMBIO DE ESTÉTICA! Fila más transparente ---
                        className="flex items-start gap-3 p-4 bg-black/20 rounded-xl group"
                      >
                        <span className="text-2xl mt-1">✓</span>
                        <p className="flex-1 text-white text-lg">{meta.text}</p>
                        <Button
                          onClick={() => handleDeleteCorto(meta.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-destructive text-destructive-foreground hover:bg-destructive/90 font-normal p-2 w-8 h-8"
                          aria-label="Eliminar"
                        >
                          <Trash2Icon className="w-4 h-4" strokeWidth={2} />
                        </Button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Nueva meta a corto plazo..."
                    value={inputCorto}
                    onChange={(e) => setInputCorto(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddCorto()}
                    // --- ¡CAMBIO DE ESTÉTICA! Input transparente ---
                    className="flex-1 bg-white/20 text-white border-white/30 placeholder:text-gray-300 rounded-md"
                  />
                  <Button
                    onClick={handleAddCorto}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-normal"
                  >
                    <PlusIcon className="w-5 h-5" strokeWidth={2} />
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {/* --- ¡CAMBIO DE ESTÉTICA! Tarjeta de vidrio oscuro --- */}
              <Card className="bg-black/20 backdrop-blur-sm text-white p-8 rounded-3xl shadow-xl border-2 border-white/30 h-full">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-4xl">🎯</span>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white">
                    A Largo Plazo
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <AnimatePresence>
                    {metasLargo.map((meta) => (
                      <motion.div
                        key={meta.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        // --- ¡CAMBIO DE ESTÉTICA! Fila más transparente ---
                        className="flex items-start gap-3 p-4 bg-black/20 rounded-xl group"
                      >
                        <span className="text-2xl mt-1">★</span>
                        <p className="flex-1 text-white text-lg">{meta.text}</p>
                        <Button
                          onClick={() => handleDeleteLargo(meta.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-destructive text-destructive-foreground hover:bg-destructive/90 font-normal p-2 w-8 h-8"
                          aria-label="Eliminar"
                        >
                          <Trash2Icon className="w-4 h-4" strokeWidth={2} />
                        </Button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Nueva meta a largo plazo..."
                    value={inputLargo}
                    onChange={(e) => setInputLargo(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddLargo()}
                    // --- ¡CAMBIO DE ESTÉTICA! Input transparente ---
                    className="flex-1 bg-white/20 text-white border-white/30 placeholder:text-gray-300 rounded-md"
                  />
                  <Button
                    onClick={handleAddLargo}
                    className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal"
                  >
                    <PlusIcon className="w-5 h-5" strokeWidth={2} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </AnimatedParagraph>
      </div>

      {/* Trofeos/estrellas flotantes (CONSERVADOS) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`trophy-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        >
          <span className="text-3xl opacity-40">
            {i % 3 === 0 ? '🏆' : i % 3 === 1 ? '🎖️' : '⭐'}
          </span>
        </motion.div>
      ))}
    </div>
  );
};