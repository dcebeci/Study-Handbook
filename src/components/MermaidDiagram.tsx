import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { useAppContext } from '../context/AppContext';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

interface MermaidDiagramProps {
  chart: string;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    let isMounted = true;
    
    const renderChart = async () => {
      if (containerRef.current) {
        try {
          // Clear previous content
          containerRef.current.innerHTML = '';
          const { svg } = await mermaid.render(idRef.current, chart);
          if (isMounted && containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          if (isMounted && containerRef.current) {
            containerRef.current.innerHTML = `<div class="text-red-400 p-4">Error rendering diagram</div>`;
          }
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return <div ref={containerRef} className="flex justify-center bg-slate-800 p-4 rounded-lg overflow-x-auto my-6" />;
};
