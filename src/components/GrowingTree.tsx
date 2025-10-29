import { motion } from 'framer-motion';

export const GrowingTree = () => {
  return (
    <div className="fixed bottom-0 left-8 z-10 pointer-events-none">
      {/* Contenedor principal del árbol */}
      <div className="relative flex flex-col items-center">
        {/* Tronco del árbol - PRIMERO (z-index más bajo) */}
        <motion.div
          className="relative z-10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 3,
            ease: 'easeOut',
          }}
          style={{
            transformOrigin: 'bottom',
            position: 'absolute',
            bottom: 0,
          }}
        >
          {/* Tronco principal */}
          <div
            className="relative"
            style={{
              width: '40px',
              height: '200px',
              background: 'linear-gradient(to right, #8B4513, #A0522D)',
              borderRadius: '20px 20px 0 0',
              boxShadow: 'inset -5px 0 10px rgba(0,0,0,0.3)',
            }}
          >
            {/* Textura del tronco */}
            <div className="absolute top-1/4 left-1/2 w-3 h-8 bg-black opacity-20 rounded-full transform -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/4 w-2 h-6 bg-black opacity-20 rounded-full" />
            <div className="absolute top-2/3 right-1/4 w-2 h-5 bg-black opacity-20 rounded-full" />
          </div>

          {/* Raíces */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 2,
              ease: 'easeOut',
            }}
            style={{
              transformOrigin: 'top',
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0"
                style={{
                  width: '8px',
                  height: '30px',
                  background: 'linear-gradient(to bottom, #8B4513, #654321)',
                  borderRadius: '0 0 10px 10px',
                  left: `${-20 + i * 10}px`,
                  transform: `rotate(${-20 + i * 10}deg)`,
                  transformOrigin: 'top',
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Copa del árbol - SEGUNDO (z-index más alto, encima del tronco) */}
        <motion.div
          className="relative z-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 2,
            duration: 2,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            bottom: '160px', // Posicionado para que cubra la parte superior del tronco
          }}
        >
          {/* Hojas en capas - todas centradas */}
          <motion.div
            className="relative flex flex-col items-center"
            animate={{
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Capa superior */}
            <div
              className="mb-[-25px]"
              style={{
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, #90EE90, #228B22)',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(34, 139, 34, 0.4)',
              }}
            />

            {/* Capa media */}
            <div
              className="mb-[-35px]"
              style={{
                width: '120px',
                height: '100px',
                background: 'radial-gradient(circle, #98FB98, #32CD32)',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(50, 205, 50, 0.4)',
              }}
            />

            {/* Capa inferior - más grande para conectar mejor */}
            <div
              style={{
                width: '160px',
                height: '130px',
                background: 'radial-gradient(circle, #90EE90, #228B22)',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(34, 139, 34, 0.4)',
              }}
            />
          </motion.div>

          {/* Frutas/Manzanas */}
          {[...Array(6)].map((_, i) => {
            const positions = [
              { x: -30, y: 20 },
              { x: 30, y: 25 },
              { x: -45, y: 70 },
              { x: 45, y: 75 },
              { x: 0, y: 85 },
              { x: -15, y: 10 },
            ];

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `calc(50% + ${positions[i].x}px)`,
                  top: `${positions[i].y}px`,
                  width: '15px',
                  height: '15px',
                  background: 'radial-gradient(circle at 30% 30%, #FF6B6B, #C92A2A)',
                  borderRadius: '50%',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                  transform: 'translateX(-50%)',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 3.5 + i * 0.2,
                  duration: 0.5,
                  ease: 'backOut',
                }}
              >
                {/* Hojita de la manzana */}
                <div
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '4px',
                    height: '6px',
                    background: '#228B22',
                    borderRadius: '50% 50% 0 0',
                  }}
                />
              </motion.div>
            );
          })}

          {/* Pájaros volando alrededor */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`bird-${i}`}
              className="absolute"
              style={{
                left: '50%',
                top: '-20px',
                transform: 'translateX(-50%)',
              }}
              animate={{
                x: [0, 60 + i * 20, 0],
                y: [0, -30 - i * 10, 0],
              }}
              transition={{
                delay: 4 + i * 0.5,
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg width="20" height="15" viewBox="0 0 20 15">
                <path
                  d="M2 7 Q5 2, 10 7 Q15 2, 18 7"
                  stroke="#333"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>

        {/* Pasto alrededor del árbol */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 1,
            duration: 1.5,
          }}
          style={{
            transformOrigin: 'center',
            width: '120px',
          }}
        >
          <div className="flex justify-center">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="inline-block"
                style={{
                  width: '3px',
                  height: `${15 + Math.random() * 10}px`,
                  background: 'linear-gradient(to top, #228B22, #90EE90)',
                  borderRadius: '50% 50% 0 0',
                  marginLeft: '2px',
                  transform: `rotate(${-10 + Math.random() * 20}deg)`,
                }}
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  delay: 1.5 + i * 0.1,
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
