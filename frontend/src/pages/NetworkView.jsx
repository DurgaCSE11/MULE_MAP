import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Info } from 'lucide-react';
import ForceGraph2D from 'react-force-graph-2d';

// Generate mock data for a Mule Network
const generateMockNetwork = () => {
  const nodes = [];
  const links = [];
  
  // Central Mule Account (Aggregator)
  nodes.push({ id: 'ACC-1029', group: 1, val: 20, name: 'Mule Aggregator' });
  
  // Layer 1 (Depositors / Victims)
  for (let i = 1; i <= 5; i++) {
    nodes.push({ id: `DEP-${i}`, group: 2, val: 5, name: 'Victim/Source' });
    links.push({ source: `DEP-${i}`, target: 'ACC-1029', value: 2 });
  }
  
  // Layer 2 (Distributors / Cash out)
  for (let i = 1; i <= 12; i++) {
    nodes.push({ id: `DIST-${i}`, group: 3, val: 3, name: 'Money Mule' });
    links.push({ source: 'ACC-1029', target: `DIST-${i}`, value: 1 });
  }

  return { nodes, links };
};

const NetworkView = () => {
  const graphRef = useRef();
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    setGraphData(generateMockNetwork());
    
    // Adjust the physics engine so the nodes spread out nicely 
    // instead of clumping together in a "balloon" shape.
    setTimeout(() => {
      if (graphRef.current) {
        // Increase repulsive force between nodes
        graphRef.current.d3Force('charge').strength(-400);
        // Increase the resting distance of the links
        graphRef.current.d3Force('link').distance(80);
      }
    }, 100);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 className="page-title" style={{ marginBottom: 0 }}>Mule Network Visualization</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div className="badge badge-high"><Network size={14} style={{marginRight: '4px'}}/> 1 Suspicious Cluster Selected</div>
        </div>
      </div>
      
      <div className="glass-panel" style={{ flex: 1, position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
        
        {/* Interactive Graph */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <ForceGraph2D
            ref={graphRef}
            graphData={graphData}
            nodeAutoColorBy="group"
            nodeRelSize={6}
            linkColor={() => 'rgba(255,255,255,0.3)'}
            linkWidth={2}
            linkDirectionalParticles={3}
            linkDirectionalParticleSpeed={0.005}
            backgroundColor="transparent"
            onNodeClick={(node) => {
              graphRef.current.centerAt(node.x, node.y, 1000);
              graphRef.current.zoom(8, 2000);
            }}
          />
        </div>

        {/* Analytics Overlay */}
        <div style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '2rem', 
          background: 'rgba(12, 16, 28, 0.8)', 
          backdropFilter: 'blur(10px)',
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-light)',
          maxWidth: '300px',
          pointerEvents: 'none'
        }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            <Info size={18} color="var(--primary-accent)"/> Cluster Analytics
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Central Node:</span> <strong style={{color: 'var(--text-main)'}}>ACC-1029</strong></li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Total Nodes:</span> <strong style={{color: 'var(--text-main)'}}>18</strong></li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Funds Flow:</span> <strong style={{color: 'var(--danger)'}}>$1.2M</strong></li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default NetworkView;
