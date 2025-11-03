import { useState, useRef, useEffect } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PencilIcon, CheckIcon, PlayIcon, PauseIcon, Volume2Icon } from 'lucide-react';

// Importamos el archivo de audio
import cancionAudio from '../../assets/cancion.mp3';

export const Slide6CancionFavorita = () => {
  const [cancion, setCancion] = useState('Delante de Tu Trono - Marcos Barrientos');
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);

  // --- NUEVOS ESTADOS PARA EL PROGRESO ---
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // --- NUEVO FORMATEADOR DE TIEMPO ---
  // Convierte segundos (ej: 125) a "2:05"
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditValue(cancion);
  };

  const handleSave = () => {
    if (editValue.trim()) {
      setCancion(editValue.trim());
      setIsEditing(false);
      setEditValue('');
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        // setIsPlaying(false) // El listener 'onPause' se encargará de esto
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error al reproducir:', error);
        });
        // setIsPlaying(true) // El listener 'onPlay' se encargará de esto
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0); // Reinicia el tiempo al terminar
  };

  // --- NUEVOS MANEJADORES DE EVENTOS ---
  // Se llama cuando el audio está cargado y sabe cuánto dura
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Se llama continuamente mientras la canción se reproduce
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Se llama cuando el usuario arrastra la barra de progreso
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = parseFloat(e.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      {/* Audio Element - OCULTO */}
      <audio
        ref={audioRef}
        src={cancionAudio}
        onEnded={handleAudioEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        // --- NUEVOS 'LISTENERS' EN EL ELEMENTO AUDIO ---
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* ... (Todo el código de diseño de fondo (vinilo, notas, etc) es igual) ... */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_3.png"
          alt="botanical line texture"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
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
      {['🎵', '🎶', '🎼', '🎤', '🎧'].map((note, i) => (
        <motion.div
          key={`note-${i}`}
          className="absolute z-10"
          style={{ left: `${10 + i * 18}%`, top: `${15 + (i % 4) * 20}%` }}
          animate={{ y: isPlaying ? [0, -30, 0] : 0, rotate: isPlaying ? [0, 360] : 0, scale: isPlaying ? [1, 1.4, 1] : 1 }}
          transition={{ duration: 3 + i * 0.5, repeat: isPlaying ? Infinity : 0, delay: i * 0.3, ease: 'easeInOut' }}
        >
          <span className="text-5xl opacity-30">{note}</span>
        </motion.div>
      ))}
      <motion.div
        className="absolute bottom-20 left-20 z-20 flex gap-2"
        animate={{ opacity: isPlaying ? [0.5, 1, 0.5] : 0.3 }}
        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: 'easeInOut' }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 bg-gradient-1 rounded-full"
            style={{ height: 40 }}
            animate={{ scaleY: isPlaying ? [0.3, 1, 0.5, 1, 0.3] : 0.3 }}
            transition={{ duration: 1, repeat: isPlaying ? Infinity : 0, delay: i * 0.1, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>
      {/* ... (Fin del código de fondo) ... */}


      <div className="relative z-10 max-w-3xl w-full">
        <InteractiveTitle
          text="Mi Canción Favorita"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground"
        />

        <AnimatedParagraph delay={1.2}>
          <Card className="bg-card/90 backdrop-blur-sm text-card-foreground p-12 md:p-16 rounded-3xl shadow-2xl border-2 border-secondary/30 relative overflow-hidden">
            {/* ... (Ondas decorativas) ... */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute left-0 right-0 h-1 bg-gradient-1 opacity-20"
                style={{ top: `${30 + i * 20}%` }}
                animate={{ scaleX: isPlaying ? [0.5, 1, 0.5] : 0.5, opacity: isPlaying ? [0.1, 0.3, 0.1] : 0.1 }}
                transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, delay: i * 0.3, ease: 'easeInOut' }}
              />
            ))}

            <div className="relative z-10">
              <motion.div
                className="text-8xl text-center mb-8"
                animate={{ scale: isPlaying ? [1, 1.15, 1] : 1, rotate: isPlaying ? [0, -5, 5, 0] : 0 }}
                transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'easeInOut' }}
              >
                🎵
              </motion.div>

              {isEditing ? (
                <div className="space-y-6">
                  {/* ... (Tu código de edición) ... */}
                  <Input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    placeholder="Nombre de la Canción - Artista"
                    className="bg-background text-foreground border-border text-center text-xl py-6"
                    autoFocus
                  />
                  <Button
                    onClick={handleSave}
                    className="w-full bg-success text-success-foreground hover:bg-success/90 font-normal text-xl py-6"
                  >
                    <CheckIcon className="w-6 h-6 mr-2" strokeWidth={2} />
                    Guardar
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <motion.p
                    className="text-3xl md:text-4xl text-foreground text-center font-headline font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.8 }}
                  >
                    {cancion}
                  </motion.p>

                  {/* --- NUEVO JSX (La barra de progreso) --- */}
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-foreground font-mono text-sm w-12 text-right">
                      {formatTime(currentTime)}
                    </span>
                    <input
                      type="range"
                      min="0"
                      max={duration || 0} // Usamos 'duration' como el máximo
                      value={currentTime}   // Usamos 'currentTime' como el valor
                      onInput={handleSeek} // Usamos onInput para que sea fluido al arrastrar
                      className="flex-1 accent-secondary" // 'accent-secondary' le da el color rosado
                    />
                    <span className="text-foreground font-mono text-sm w-12 text-left">
                      {formatTime(duration)}
                    </span>
                  </div>
                  {/* --- FIN DEL NUEVO JSX --- */}


                  {/* Control de volumen (sin cambios) */}
                  <div className="flex items-center gap-4 justify-center">
                    <Volume2Icon className="w-6 h-6 text-foreground" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-32 accent-secondary"
                    />
                    <span className="text-foreground font-bold w-12">
                      {Math.round(volume * 100)}%
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={togglePlay}
                      className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-normal text-xl py-6"
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
                    <Button
                      onClick={handleEdit}
                      className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal text-xl py-6 px-8"
                    >
                      <PencilIcon className="w-6 h-6" strokeWidth={2} />
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center italic">
                    {isPlaying ? '🎵 Reproduciendo...' : '🎵 Haz clic en Reproducir para escuchar'}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </AnimatedParagraph>
      </div>
    </div>
  );
};