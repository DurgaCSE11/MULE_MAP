import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, BrainCircuit, BellRing } from 'lucide-react';

const layers = [
  {
    id: 1,
    title: "Data Ingestion & Processing Layer",
    description: "Collects transaction data from banking systems, fraud monitoring alerts, and cyber-fraud reports. Ensures incoming data is processed efficiently in near real-time.",
    icon: <Database size={32} color="var(--primary-accent)" />
  },
  {
    id: 2,
    title: "Feature Engineering Layer",
    description: "Transforms raw transactional data into meaningful behavioral, temporal, and network-based features to better capture suspicious patterns associated with mule accounts.",
    icon: <Filter size={32} color="var(--success)" />
  },
  {
    id: 3,
    title: "Hybrid Machine Learning Layer",
    description: "Combines supervised and unsupervised learning techniques to detect both previously known fraud signatures and newly emerging fraudulent behaviors.",
    icon: <BrainCircuit size={32} color="var(--secondary-accent)" />
  },
  {
    id: 4,
    title: "Alerting & Explainability Layer",
    description: "Generates risk scores ranging from 0 to 1 for each transaction and provides interpretable explanations for flagged activities using XAI (SHAP).",
    icon: <BellRing size={32} color="var(--warning)" />
  }
];

const Architecture = () => {
  return (
    <section id="architecture" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        System <span className="text-gradient">Architecture</span>
      </motion.h2>
      
      <div className="grid-2">
        {layers.map((layer, index) => (
          <motion.div 
            key={layer.id}
            className="glass-panel"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                {layer.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>{layer.title}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {layer.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Architecture;
