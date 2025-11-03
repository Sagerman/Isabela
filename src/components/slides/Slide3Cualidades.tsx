import { useState } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCualidadesStore } from '@/stores/cualidadesStore';
import { PencilIcon, Trash2Icon, CheckIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Slide3Cualidades = () => {
  const { cualidades, addCualidad, editCualidad, deleteCualidad } = useCualidadesStore();
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addCualidad(inputValue.trim());
      setInputValue('');
    }
  };

  const handleEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditValue(text);
  };

  const handleSaveEdit = (id: string) => {
    if (editValue.trim()) {
      editCualidad(id, editValue.trim());
      setEditingId(null);
      setEditValue('');
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_4.png"
          alt="floating bubbles background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
        
        {/* Este div padre se asegura de que el InteractiveTitle se centre */}
        <div className="w-full text-center mb-12"> {/* Añadí mb-12 para el margen inferior */}
          <InteractiveTitle
            text="¿Cuáles son las cualidades de Isabela?"
            as="h2"
            // Ahora 'text-center' en el padre es suficiente, no necesitas más aquí
            className="text-2xl md:text-4xl lg:text-5xl text-foreground px-4 inline-block" // Añadí inline-block por si acaso
          />
        </div>

        <AnimatedParagraph delay={1.2}>
          <Card className="bg-card text-card-foreground p-8 md:p-12 rounded-lg shadow-lg">
            {/* Input Section */}
            <div className="flex gap-4 mb-8">
              <Input
                type="text"
                placeholder="Escribe una cualidad..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                className="flex-1 bg-background text-foreground border-border"
              />
              <Button
                onClick={handleAdd}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-normal px-8"
              >
                Agregar
              </Button>
            </div>

            {/* List Section */}
            <div className="space-y-4">
              <AnimatePresence>
                {cualidades.map((cualidad) => (
                  <motion.div
                    key={cualidad.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 p-4 bg-background rounded-lg"
                  >
                    {editingId === cualidad.id ? (
                      <>
                        <Input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(cualidad.id)}
                          className="flex-1 bg-card text-foreground border-border"
                          autoFocus
                        />
                        <Button
                          onClick={() => handleSaveEdit(cualidad.id)}
                          className="bg-success text-success-foreground hover:bg-success/90 font-normal p-2 w-10 h-10"
                          aria-label="Guardar"
                        >
                          <CheckIcon className="w-5 h-5" strokeWidth={2} />
                        </Button>
                        <Button
                          onClick={handleCancelEdit}
                          className="bg-muted text-muted-foreground hover:bg-muted/90 font-normal p-2 w-10 h-10"
                          aria-label="Cancelar"
                        >
                          <XIcon className="w-5 h-5" strokeWidth={2} />
                        </Button>
                      </>
                    ) : (
                      <>
                        <p className="flex-1 text-foreground text-lg">{cualidad.text}</p>
                        <Button
                          onClick={() => handleEdit(cualidad.id, cualidad.text)}
                          className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal p-2 w-10 h-10"
                          aria-label="Editar"
                        >
                          <PencilIcon className="w-5 h-5" strokeWidth={2} />
                        </Button>
                        <Button
                          onClick={() => deleteCualidad(cualidad.id)}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-normal p-2 w-10 h-10"
                          aria-label="Eliminar"
                        >
                          <Trash2Icon className="w-5 h-5" strokeWidth={2} />
                        </Button>
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {cualidades.length === 0 && (
                <p className="text-center text-muted-foreground text-lg py-8">
                  No hay cualidades agregadas aún. ¡Agrega la primera!
                </p>
              )}
            </div>
          </Card>
        </AnimatedParagraph>
      </div>
    </div>
  );
};