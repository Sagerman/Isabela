import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, Trash2Icon, Edit2Icon, CheckIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Quality {
  id: string;
  text: string;
}

const QualitiesList: React.FC = () => {
  const [qualities, setQualities] = useState<Quality[]>([
    { id: '1', text: 'Creativa' },
    { id: '2', text: 'Responsable' },
    { id: '3', text: 'Curiosa' },
    { id: '4', text: 'Colaborativa' },
  ]);
  const [newQuality, setNewQuality] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (newQuality.trim()) {
      const newItem: Quality = {
        id: Date.now().toString(),
        text: newQuality.trim(),
      };
      setQualities([...qualities, newItem]);
      setNewQuality('');
    }
  };

  const handleDelete = (id: string) => {
    setQualities(qualities.filter((q) => q.id !== id));
  };

  const handleEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id: string) => {
    if (editText.trim()) {
      setQualities(
        qualities.map((q) => (q.id === id ? { ...q, text: editText.trim() } : q))
      );
      setEditingId(null);
      setEditText('');
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="w-full max-w-3xl"
    >
      <Card className="bg-card text-card-foreground p-8 md:p-12 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            type="text"
            placeholder="Agregar una nueva cualidad..."
            value={newQuality}
            onChange={(e) => setNewQuality(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, handleAdd)}
            className="flex-1 bg-background text-foreground border-border min-h-[44px]"
            aria-label="Nueva cualidad"
          />
          <Button
            onClick={handleAdd}
            className="bg-cta-secondary text-cta-secondary-foreground hover:bg-cta-secondary/90 font-normal min-h-[44px] px-8"
            aria-label="Agregar cualidad"
          >
            <PlusIcon className="w-8 h-8 mr-2" strokeWidth={1.5} />
            Agregar
          </Button>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {qualities.map((quality) => (
              <motion.div
                key={quality.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 p-4 bg-neutral rounded-lg"
              >
                {editingId === quality.id ? (
                  <>
                    <Input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, () => handleSaveEdit(quality.id))}
                      className="flex-1 bg-background text-foreground border-border min-h-[44px]"
                      aria-label="Editar cualidad"
                      autoFocus
                    />
                    <Button
                      onClick={() => handleSaveEdit(quality.id)}
                      className="bg-success text-success-foreground hover:bg-success/90 font-normal min-h-[44px] min-w-[44px] p-2"
                      aria-label="Guardar cambios"
                    >
                      <CheckIcon className="w-8 h-8" strokeWidth={1.5} />
                    </Button>
                    <Button
                      onClick={handleCancelEdit}
                      className="bg-gray-400 text-foreground hover:bg-gray-500 font-normal min-h-[44px] min-w-[44px] p-2"
                      aria-label="Cancelar edición"
                    >
                      <XIcon className="w-8 h-8" strokeWidth={1.5} />
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="flex-1 text-body md:text-[1.125rem] font-sans font-light text-foreground">
                      {quality.text}
                    </p>
                    <Button
                      onClick={() => handleEdit(quality.id, quality.text)}
                      className="bg-cta-secondary text-cta-secondary-foreground hover:bg-cta-secondary/90 font-normal min-h-[44px] min-w-[44px] p-2"
                      aria-label={`Editar ${quality.text}`}
                    >
                      <Edit2Icon className="w-8 h-8" strokeWidth={1.5} />
                    </Button>
                    <Button
                      onClick={() => handleDelete(quality.id)}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-normal min-h-[44px] min-w-[44px] p-2"
                      aria-label={`Eliminar ${quality.text}`}
                    >
                      <Trash2Icon className="w-8 h-8" strokeWidth={1.5} />
                    </Button>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};

export default QualitiesList;
