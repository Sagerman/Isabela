import { useState, useRef, useEffect } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { motion } from 'framer-motion';
import { PlayIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ListIcon } from 'lucide-react';

// Importamos el VIDEO local (el nuevo que pusiste)
import videoFondo from '../../assets/pelicula.mp4';

// --- ¡CAMBIO AQUÍ! Importamos una imagen de póster más apropiada (o tu propia imagen) ---
// Usaré una imagen de Frozen como ejemplo. Si tienes un póster específico para 'pelicula.mp4',
// reemplaza esta URL o importa tu imagen como 'import posterImage from "../../assets/mi-poster.jpg";'
const posterUrl = "https://lumiere-a.akamaihd.net/v1/images/p_frozen_19753_896898b6.jpeg"; // Póster de Frozen

const peliculas = [
  "Frozen",
  "Notebook",
  "10 cosas que odio de ti",
  "Interestelar"
];

const series = [
  "Herederos",
  "Love next door",
  "Rebelde way"
];

export const Slide7PeliculaFavorita = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (playVideo && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error al intentar reproducir el video:", error);
      });
    }
  }, [playVideo]);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32 overflow-hidden">
      
      {/* LÓGICA DEL FONDO DE VÍDEO CON BOTÓN */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {playVideo ? (
          <video
            ref={videoRef}
            src={videoFondo} // Tu nuevo video
            loop
            muted={false} // Con sonido
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            title="Video de fondo"
          >
            Tu navegador no soporta videos HTML5.
          </video>
        ) : (
          // El póster y el botón de Play
          <div 
            className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500"
            onClick={handlePlayVideo}
          >
            {/* --- ¡CAMBIO AQUÍ! Usamos la nueva URL del póster --- */}
            <img
              src={posterUrl}
              alt="Póster de película"
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
            />
            <div className="absolute inset-0 bg-black/40 -z-10"></div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              <PlayIcon className="w-24 h-24 md:w-32 md:h-32 text-white/80" strokeWidth={1.5} />
            </motion.div>
            <p className="text-white/90 text-xl md:text-2xl mt-4 font-semibold [text-shadow:_0_1px_4px_rgb(0_0_0_/_0.5)]">
              Reproducir con sonido
            </p>
          </div>
        )}
      </div>
      
      {/* Textura adicional sutil (sin cambios) */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_4.png"
          alt="floating bubbles background"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      {/* Animaciones de fondo (claqueta, luces, estrellas - sin cambios) */}
      <motion.div
        className="absolute top-16 left-16 z-20"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-8xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">🎬</div>
        <motion.div
          className="absolute top-1/2 left-full w-96 h-2 bg-gradient-to-r from-yellow-300/50 to-transparent"
          style={{ transformOrigin: 'left' }}
          animate={{ scaleX: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute z-10"
          style={{ left: `${10 + i * 10}%`, top: `${15 + (i % 4) * 15}%` }}
          animate={{ y: [0, -40, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
        >
          <span className="text-5xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">✨</span>
        </motion.div>
      ))}
      <motion.div
        className="absolute bottom-20 right-20 z-20 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className="text-4xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
          >
            ⭐
          </motion.span>
        ))}
      </motion.div>

      {/* CONTENIDO DE LAS LISTAS */}
      <div className="relative z-10 max-w-4xl w-full">
        <InteractiveTitle
          text="Películas y Series Favoritas"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.7)]"
        />

        <AnimatedParagraph delay={1.2}>
          <div className="flex flex-col md:flex-row gap-8 justify-center">

            {/* Columna de Películas */}
            <Card className="flex-1 bg-blue-50/50 backdrop-blur-md text-gray-900 p-8 rounded-lg shadow-lg border border-white/30">
              <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">Películas 🍿</h3>
              <ul className="space-y-3">
                {peliculas.map((pelicula, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-lg font-medium text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                  >
                    <ListIcon className="w-5 h-5 text-secondary" />
                    {pelicula}
                  </motion.li>
                ))}
              </ul>
            </Card>

            {/* Columna de Series */}
            <Card className="flex-1 bg-blue-50/50 backdrop-blur-md text-gray-900 p-8 rounded-lg shadow-lg border border-white/30">
              <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">Series 📺</h3>
              <ul className="space-y-3">
                {series.map((serie, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-lg font-medium text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                  >
                    <ListIcon className="w-5 h-5 text-secondary" />
                    {serie}
                  </motion.li>
                ))}
              </ul>
            </Card>

          </div>
        </AnimatedParagraph>
      </div>
    </div>
  );
};