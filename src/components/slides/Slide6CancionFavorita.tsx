import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon, Volume2Icon } from 'lucide-react';

// Importamos AMBAS canciones
import cancionAudio1 from '../../assets/cancion.mp3'; // Cara a cara - Marcos Vidal
import cancionAudio2 from '../../assets/cancion2.mp3'; // Look After You - The Fray

// Importamos tu nuevo GIF de fondo
import fondoAnimado from '../../assets/slide6-fondo.gif';

// --- Componente de UI para CADA reproductor ---
interface SongPlayerUIProps {
  title: string;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onTogglePlay: () => void;
  onSeek: (e: ChangeEvent<HTMLInputElement>) => void;
  onVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formatTime: (time: number) => string;
}

const SongPlayerUI = ({
  title,
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlay,
  onSeek,
  onVolumeChange,
  formatTime,
}: SongPlayerUIProps) => {
  return (
    <Card className="bg-white/20 backdrop-blur-md text-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-white/30 relative overflow-hidden w-full max-w-md">
      {/* (Ondas decorativas) - Se mantendrán, ya que su opacidad es baja */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute left-0 right-0 h-1 bg-gradient-1 opacity-20"
          style={{ top: `${30 + i * 20}%` }}
          animate={{ scaleX: isPlaying ? [0.5, 1, 0.5] : 0.5, opacity: isPlaying ? [0.1, 0.3, 0.1] : 0.1 }}
          transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 space-y-6">
        <motion.div
          className="text-6xl text-center mb-6 text-indigo-700" 
          animate={{ scale: isPlaying ? [1, 1.1, 1] : 1, rotate: isPlaying ? [0, -5, 5, 0] : 0 }}
          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'easeInOut' }}
        >
          🎵
        </motion.div>

        <motion.p
          className="text-2xl md:text-3xl text-gray-900 text-center font-headline font-bold" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
        >
          {title}
        </motion.p>

        {/* Barra de progreso */}
        <div className="flex items-center gap-3 justify-center">
          <span className="text-gray-800 font-mono text-sm w-12 text-right"> 
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onInput={onSeek}
            className="flex-1 accent-indigo-600" 
          />
          <span className="text-gray-800 font-mono text-sm w-12 text-left"> 
            {formatTime(duration)}
          </span>
        </div>

        {/* Control de volumen */}
        <div className="flex items-center gap-4 justify-center">
          <Volume2Icon className="w-6 h-6 text-gray-700" /> 
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={onVolumeChange}
            className="w-32 accent-indigo-600" 
          />
          <span className="text-gray-800 font-bold w-12"> 
            {Math.round(volume * 100)}%
          </span>
        </div>

        {/* Botón de Play/Pausa */}
        <div className="flex gap-4">
          <Button
            onClick={onTogglePlay}
            // --- ¡CAMBIO AQUÍ! Colores del botón a tonos dorados ---
            className="flex-1 bg-yellow-500 text-white hover:bg-yellow-600 font-normal text-xl py-6 shadow-lg transition-all duration-300 ease-in-out" 
          >
            {isPlaying ? (
              <>
                <PauseIcon className="w-6 h-6 mr-2" strokeWidth={2} />
                Pausar
              </>
            ) : (
              <>
                <PlayIcon className="w-6 h-6 mr-2" strokeWidth={2} />
                Reproducir
              </>
            )}
          </Button>
        </div>

        <p className="text-sm text-gray-700 text-center italic"> 
          {isPlaying ? '🎵 Reproduciendo...' : '🎵 Haz clic para escuchar'}
        </p>
      </div>
    </Card>
  );
};


// --- Componente principal de la diapositiva (sin cambios en la lógica) ---
export const Slide6CancionFavorita = () => {
  // Estados y Refs para Canción 1
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [currentTime1, setCurrentTime1] = useState(0);
  const [duration1, setDuration1] = useState(0);
  const audioRef1 = useRef<HTMLAudioElement>(null);

  // Estados y Refs para Canción 2
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [currentTime2, setCurrentTime2] = useState(0);
  const [duration2, setDuration2] = useState(0);
  const audioRef2 = useRef<HTMLAudioElement>(null);

  // Estado de Volumen (Compartido)
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    if (audioRef1.current) audioRef1.current.volume = volume;
    if (audioRef2.current) audioRef2.current.volume = volume;
  }, [volume]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay1 = () => {
    if (audioRef1.current) {
      if (isPlaying1) {
        audioRef1.current.pause();
      } else {
        audioRef2.current?.pause(); 
        audioRef1.current.play().catch(console.error);
      }
    }
  };

  const togglePlay2 = () => {
    if (audioRef2.current) {
      if (isPlaying2) {
        audioRef2.current.pause();
      } else {
        audioRef1.current?.pause();
        audioRef2.current.play().catch(console.error);
      }
    }
  };

  // Manejadores de eventos (sin cambios)
  const handleTimeUpdate1 = () => setCurrentTime1(audioRef1.current?.currentTime || 0);
  const handleLoadedMetadata1 = () => setDuration1(audioRef1.current?.duration || 0);
  const handleSeek1 = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef1.current) audioRef1.current.currentTime = parseFloat(e.target.value);
    setCurrentTime1(audioRef1.current.currentTime);
  };
  const handleTimeUpdate2 = () => setCurrentTime2(audioRef2.current?.currentTime || 0);
  const handleLoadedMetadata2 = () => setDuration2(audioRef2.current?.duration || 0);
  const handleSeek2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef2.current) audioRef2.current.currentTime = parseFloat(e.target.value);
    setCurrentTime2(audioRef2.current.currentTime);
  };

  const globalIsPlaying = isPlaying1 || isPlaying2;

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      {/* --- DOS ELEMENTOS DE AUDIO (sin cambios) --- */}
      <audio
        ref={audioRef1}
        src={cancionAudio1}
        onEnded={() => setIsPlaying1(false)}
        onPlay={() => setIsPlaying1(true)}
        onPause={() => setIsPlaying1(false)}
        onLoadedMetadata={handleLoadedMetadata1}
        onTimeUpdate={handleTimeUpdate1}
      />
      <audio
        ref={audioRef2}
        src={cancionAudio2}
        onEnded={() => setIsPlaying2(false)}
        onPlay={() => setIsPlaying2(true)}
        onPause={() => setIsPlaying2(false)}
        onLoadedMetadata={handleLoadedMetadata2}
        onTimeUpdate={handleTimeUpdate2}
      />

      {/* Fondo con tu GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondoAnimado} 
          alt="Fondo animado musical" 
          className="w-full h-full object-cover opacity-80" 
          loading="lazy"
        />
      </div>
      
      {/* Disco de vinilo (CONSERVADO y conectado a globalIsPlaying) */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
        animate={{ rotate: globalIsPlaying ? 360 : 0 }}
        transition={{ duration: 3, repeat: globalIsPlaying ? Infinity : 0, ease: 'linear' }}
      >
        <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl">
            {[...Array(30)].map((_, i) => ( <div key={i} className="absolute rounded-full border border-gray-700/30" style={{ inset: `${i * 3}%` }} /> ))}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gray-900" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Notas flotantes (CONSERVADAS y conectadas a globalIsPlaying) */}
      {['🎵', '🎶', '🎼', '🎤', '🎧'].map((note, i) => (
        <motion.div
          key={`note-${i}`}
          className="absolute z-10"
          style={{ left: `${10 + i * 18}%`, top: `${15 + (i % 4) * 20}%` }}
          animate={{ y: globalIsPlaying ? [0, -30, 0] : 0, rotate: globalIsPlaying ? [0, 360] : 0, scale: globalIsPlaying ? [1, 1.4, 1] : 1 }}
          transition={{ duration: 3 + i * 0.5, repeat: globalIsPlaying ? Infinity : 0, delay: i * 0.3, ease: 'easeInOut' }}
        >
          <span className="text-5xl opacity-30">{note}</span>
        </motion.div>
      ))}
      {/* Barras de sonido animadas (CONSERVADAS y conectadas a globalIsPlaying) */}
      <motion.div
        className="absolute bottom-20 left-20 z-20 flex gap-2"
        animate={{ opacity: globalIsPlaying ? [0.5, 1, 0.5] : 0.3 }}
        transition={{ duration: 2, repeat: globalIsPlaying ? Infinity : 0, ease: 'easeInOut' }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 bg-gradient-1 rounded-full"
            style={{ height: 40 }}
            animate={{ scaleY: globalIsPlaying ? [0.3, 1, 0.5, 1, 0.3] : 0.3 }}
            transition={{ duration: 1, repeat: globalIsPlaying ? Infinity : 0, delay: i * 0.1, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      {/* Contenido Principal */}
      <div className="relative z-10 w-full">
        <InteractiveTitle
          text="Mis Canciones Favoritas"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-12 md:mb-16 text-center text-foreground"
        />

        <AnimatedParagraph delay={1.2}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
            
            {/* Reproductor 1 */}
            <SongPlayerUI
              title="Cara a cara - Marcos Vidal"
              isPlaying={isPlaying1}
              currentTime={currentTime1}
              duration={duration1}
              volume={volume}
              onTogglePlay={togglePlay1}
              onSeek={handleSeek1}
              onVolumeChange={(e) => setVolume(parseFloat(e.target.value))}
              formatTime={formatTime}
            />

            {/* Reproductor 2 */}
            <SongPlayerUI
              title="Look After You - The Fray"
              isPlaying={isPlaying2}
              currentTime={currentTime2}
              duration={duration2}
              volume={volume}
              onTogglePlay={togglePlay2}
              onSeek={handleSeek2}
              onVolumeChange={(e) => setVolume(parseFloat(e.target.value))}
              formatTime={formatTime}
            />

          </div>
        </AnimatedParagraph>
      </div>
    </div>
  );
};