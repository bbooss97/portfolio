import React from 'react';

interface ParticleProps {
  className?: string;
}

export const AnimatedParticles: React.FC<ParticleProps> = ({ className = '' }) => {
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className={`particle particle-${i + 1}`}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }}
    />
  ));

  return (
    <div className={`particles-container ${className}`}>
      {particles}
    </div>
  );
};

interface GeometricShapeProps {
  type: 'circle' | 'triangle' | 'square';
  size: number;
  position: { top: string; left?: string; right?: string };
  animationDelay?: number;
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({ 
  type, 
  size, 
  position, 
  animationDelay = 0 
}) => {
  const getShapeStyle = () => {
    const baseStyle: any = {
      width: `${size}px`,
      height: `${size}px`,
      position: 'absolute' as const,
      top: position.top,
      animationDelay: `${animationDelay}s`,
    };

    if (position.left) baseStyle.left = position.left;
    if (position.right) baseStyle.right = position.right;

    switch (type) {
      case 'circle':
        return {
          ...baseStyle,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
        };
      case 'triangle':
        return {
          ...baseStyle,
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid rgba(255, 255, 255, 0.1)`,
        };
      case 'square':
        return {
          ...baseStyle,
          background: 'rgba(255, 255, 255, 0.1)',
          transform: 'rotate(45deg)',
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div 
      className={`geometric-shape ${type}`}
      style={getShapeStyle()}
    />
  );
};
