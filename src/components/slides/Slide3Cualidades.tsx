import { useState } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { motion } from 'framer-motion';

// --- (Eliminamos Card, Input, Button, useCualidadesStore y todos los iconos) ---

// Importamos tu nuevo GIF de fondo
import fondoAnimado from '../../assets/slide3-fondo.gif';

// --- ¡NUEVO! Aquí dividimos tu texto de WhatsApp ---
const cualidades = [
  {
    id: 1,
    frente: "Genuina y Confiable",
    dorso: "Soy una persona genuina, con un corazón noble. Me esfuerzo por cumplir lo que prometo y tengo ganas de mejorar cada día."
  },
  {
    id: 2,
    frente: "Fuerte y Resiliente",
    dorso: "Soy fuerte, aprendo de mis errores y confío en que puedo lograr todo lo que me proponga."
  },
  {
    id: 3,
    frente: "Empática y Sensible",
    dorso: "Valoro los pequeños detalles que hacen la vida especial. A veces soy sensible, pero eso me hace más empática y humana."
  }
];

// La frase final del mensaje
const conclusion = "Poco a poco, sigo construyendo la mejor versión de mí misma.";

export const Slide3Cualidades = () => {
  // --- ¡NUEVO! Este estado controla qué tarjeta está volteada ---
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  // --- (Eliminamos toda la lógica de handleAdd, handleEdit, etc.) ---

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      
      {/* Fondo con tu nuevo GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondoAnimado}
          alt="Fondo animado de cualidades"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      {/* --- CAMBIO: Aumentado a 'max-w-4xl' para que quepan 3 tarjetas --- */}
      <div className="relative z-10 max-w-4xl w-full">
        
        {/* Título (sin cambios) */}
        <div className="w-full text-center mb-12">
          <InteractiveTitle
            text="¿Cuáles son las cualidades de Isabela?"
            as="h2"
            className="text-2xl md:text-4xl lg:text-5xl text-foreground px-4 inline-block"
          />
        </div>

        <AnimatedParagraph delay={1.2}>
          {/* --- ¡TODO ESTO ES NUEVO! --- */}
          {/* Un 'grid' para las 3 tarjetas, con perspectiva 3D */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 [perspective:1200px]">
            {cualidades.map((cualidad, index) => (
              <motion.div
                key={cualidad.id}
                className="relative w-full h-64 cursor-pointer"
                // Al hacer clic, voltea esta tarjeta (o la regresa si ya estaba volteada)
                onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                // Anima el 'rotateY' basado en el estado 'flippedIndex'
                animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }} // Habilita el 3D
              >
                {/* CARA FRONTAL de la tarjeta */}
                <div
                  className="absolute inset-0 w-full h-full bg-blue-50/50 backdrop-blur-md text-gray-900 p-6 rounded-lg shadow-lg border border-white/30 flex items-center justify-center text-center"
                  style={{ backfaceVisibility: 'hidden' }} // Oculta esta cara cuando está de espaldas
                >
                  <h3 className="text-2xl font-bold">{cualidad.frente}</h3>
                </div>
                
                {/* CARA TRASERA de la tarjeta */}
                <div
                  className="absolute inset-0 w-full h-full bg-blue-100/90 backdrop-blur-md text-gray-900 p-6 rounded-lg shadow-lg border border-white/30 flex items-center justify-center text-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} // La pone de espaldas
                >
                  <p className="text-base font-medium">{cualidad.dorso}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Frase de conclusión */}
          <p className="text-center text-xl text-foreground font-semibold mt-12 [text-shadow:_0_1px_4px_rgb(0_0_0_/_0.3)]">
            {conclusion}
          </p>
          {/* --- FIN DE LA SECCIÓN NUEVA --- */}
        </AnimatedParagraph>
      </div>
    </div>
  );
};