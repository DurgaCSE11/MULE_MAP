import React from 'react';
import { motion } from 'framer-motion';
import { Network, Info } from 'lucide-react';

const NetworkView = () => {
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
          <div className="badge badge-high"><Network size={14} style={{marginRight: '4px'}}/> 18 Suspicious Clusters</div>
        </div>
      </div>
      
      <div className="glass-panel" style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* The 3D scene is rendered in the background globally by the layout. 
            This panel just provides a framing and overlay for the specific view. */}
        <div style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '2rem', 
          background: 'rgba(12, 16, 28, 0.8)', 
          backdropFilter: 'blur(10px)',
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-light)',
          maxWidth: '300px'
        }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            <Info size={18} color="var(--primary-accent)"/> Cluster Analytics
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Central Nodes:</span> <strong style={{color: 'var(--text-main)'}}>ACC-1029</strong></li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Avg Hop Distance:</span> <strong style={{color: 'var(--text-main)'}}>3.2</strong></li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Total Funds Flow:</span> <strong style={{color: 'var(--danger)'}}>$1.2M</strong></li>
          </ul>
        </div>

        <div style={{
          background: 'rgba(0,0,0,0.4)',
          padding: '1rem 2rem',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)',
          pointerEvents: 'none'
        }}>
          <p style={{ color: 'var(--primary-accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Interactive Graph Active in Background
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NetworkView;
