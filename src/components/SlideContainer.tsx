import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {children}
    </div>
  );
};

export default SlideContainer;
