import React, { useEffect, useRef } from 'react';
import './ultra-effects.css';

// Neural Network Background
export const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const nodeCount = 50;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Draw node
        ctx.fillStyle = 'rgba(100, 200, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-network" />;
};

// Matrix Rain Effect
export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f3460';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" />;
};

// Holographic Cards
export const HolographicCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={`holographic-card ${className}`}>
      {children}
    </div>
  );
};

// Quantum Loader
export const QuantumLoader: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="quantum-loader-overlay">
      <div className="quantum-loader">
        <div className="quantum-ring"></div>
        <div className="quantum-ring"></div>
        <div className="quantum-ring"></div>
        <div className="quantum-particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="quantum-particle" style={{ '--i': i } as React.CSSProperties}></div>
          ))}
        </div>
        <div className="quantum-text">LOADING QUANTUM PORTFOLIO</div>
      </div>
    </div>
  );
};

// DNA Helix
export const DNAHelix: React.FC = () => {
  return (
    <div className="dna-container">
      <div className="dna-helix">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="dna-pair" style={{ '--i': i } as React.CSSProperties}>
            <div className="dna-base dna-left"></div>
            <div className="dna-connection"></div>
            <div className="dna-base dna-right"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Cyber Grid
export const CyberGrid: React.FC = () => {
  return (
    <div className="cyber-grid">
      <div className="grid-lines">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`h-${i}`} className="grid-line horizontal" style={{ '--i': i } as React.CSSProperties}></div>
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`v-${i}`} className="grid-line vertical" style={{ '--i': i } as React.CSSProperties}></div>
        ))}
      </div>
      <div className="grid-scanner"></div>
    </div>
  );
};

// Plasma Ball
export const PlasmaBall: React.FC = () => {
  return (
    <div className="plasma-ball">
      <div className="plasma-core">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="plasma-bolt" style={{ '--i': i } as React.CSSProperties}></div>
        ))}
      </div>
    </div>
  );
};

// Data Stream
export const DataStream: React.FC = () => {
  return (
    <div className="data-stream-container">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="data-stream" style={{ '--delay': i * 0.2 } as React.CSSProperties}>
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j} className="data-bit">
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
