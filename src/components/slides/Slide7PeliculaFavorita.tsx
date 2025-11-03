// --- Volvemos a importar 'useRef' y 'useEffect' ---
import { useState, useRef, useEffect } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
// import { Input } from '@/components/ui/input'; // Eliminado
// import { Button } from '@/components/ui/button'; // Eliminado
import { motion } from 'framer-motion';
// --- Volvemos a importar 'PlayIcon' ---
import { PlayIcon } from 'lucide-react';

// Importamos el VIDEO local
import videoFondo from '../../assets/pelicula.mp4';

export const Slide7PeliculaFavorita = () => {
  const pelicula = 'Enredados';

  // --- Volvemos a añadir el estado para controlar el vídeo ---
  const [playVideo, setPlayVideo] = useState(false);

  // --- Volvemos a añadir la referencia a la etiqueta <video> ---
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // La URL de la imagen de póster
  const posterUrl = "https://i.ytimg.com/vi/fZSZMp32XaA/maxresdefault.jpg";

  // --- Volvemos a añadir el useEffect para reproducir el video CON SONIDO ---
  useEffect(() => {
    // Si 'playVideo' es true Y el video ya existe en el DOM...
    if (playVideo && videoRef.current) {
      // Llama a la función .play()
      // Como esto ocurre después de un clic del usuario, el navegador PERMITE el sonido.
      videoRef.current.play().catch(error => {
        console.error("Error al intentar reproducir el video:", error);
      });
    }
  }, [playVideo]); // Esta función se ejecuta cada vez que el estado 'playVideo' cambia

  // Función para iniciar el vídeo al hacer clic
  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32 overflow-hidden">
      
      {/* --- Volvemos a la LÓGICA DEL FONDO DE VÍDEO CON BOTÓN --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Si 'playVideo' es true, muestra la etiqueta <video> */}
        {playVideo ? (
          <video
            ref={videoRef} // Conectamos la referencia
            src={videoFondo} // Usamos el video importado
            loop // Para que se repita
            muted={false} // ¡CON SONIDO!
            playsInline // Importante para que funcione en iOS
            className="absolute inset-0 w-full h-full object-cover"
            title="Video de fondo - Enredados"
          >
            Tu navegador no soporta videos HTML5.
          </video>
        ) : (
          // Si 'playVideo' es false, muestra el póster y el botón de Play
          <div 
            className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500"
            onClick={handlePlayVideo}
          >
            {/* Imagen de póster de fondo */}
            <img
              src={posterUrl}
              alt="Póster de Enredados"
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
            />
            {/* Overlay oscuro para que el botón resalte */}
            <div className="absolute inset-0 bg-black/40 -z-10"></div>
            
            {/* Botón de Play gigante */}
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
      {/* --- FIN DEL CAMBIO DE LÓGICA DE VÍDEO --- */}


      {/* Textura adicional sutil */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_4.png"
          alt="floating bubbles background"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      {/* ... (código de claqueta y luces flotantes sin cambios) ... */}
      <motion.div
        className="absolute top-16 left-16 z-20"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="text-8xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">🎬</div>
        <motion.div
          className="absolute top-1/2 left-full w-96 h-2 bg-gradient-to-r from-yellow-300/50 to-transparent"
          style={{ transformOrigin: 'left' }}
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute z-10"
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 4) * 15}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'easeInOut',
          }}
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
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          >
            ⭐
          </motion.span>
        ))}
      </motion.div>
      {/* ... (fin de animaciones de fondo) ... */}


      <div className="relative z-10 max-w-3xl w-full">
        <InteractiveTitle
          text="Mi Película Favorita"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.7)]"
        />

        <AnimatedParagraph delay={1.2}>
          <div className="relative z-10">
            <motion.div
              className="text-8xl text-center mb-8 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🎥
            </motion.div>

            <div className="space-y-6">
              <motion.p
                className="text-3xl md:text-4xl text-foreground text-center font-headline font-bold [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.7)]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.8 }}
              >
                {pelicula}
              </motion.p>
            </div>
          </div>
        </AnimatedParagraph>
      </div>
    </div>
  );
};