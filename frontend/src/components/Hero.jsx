import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Network } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div 
        className="glass-panel"
        style={{ padding: '4rem', textAlign: 'center', maxWidth: '800px' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="floating"
          style={{ display: 'inline-flex', gap: '1rem', marginBottom: '2rem' }}
        >
          <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%' }}>
            <ShieldCheck size={40} color="var(--primary-accent)" />
          </div>
          <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%' }}>
            <Network size={40} color="var(--secondary-accent)" />
          </div>
          <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
            <Activity size={40} color="var(--success)" />
          </div>
        </motion.div>

        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
          Welcome to <span className="text-gradient">MULE MAP</span>
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 400 }}>
          Scalable AI/ML-driven Fraud Detection Framework
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem', color: 'var(--text-main)' }}>
          Traditional rule-based systems are no longer enough. We leverage hybrid machine learning, behavioral analytics, and graph-based network detection to identify both known and emerging financial fraud patterns in near real-time.
        </p>
        
        <button 
          className="btn-primary" 
          onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Architecture
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
