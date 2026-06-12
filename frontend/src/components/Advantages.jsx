import React from 'react';
import { motion } from 'framer-motion';

const advantages = [
  "Detection of Both Known and Unknown Fraud Patterns",
  "Behavioral Analysis Instead of Transaction-Level Monitoring",
  "Graph-Based Identification of Mule Networks",
  "Real-Time Risk Assessment",
  "Explainable AI for Transparency and Compliance",
  "Reduced False Positives",
  "Scalable and Future-Ready Architecture"
];

const Advantages = () => {
  return (
    <section className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Key <span className="text-gradient">Advantages</span>
      </motion.h2>

      <div className="grid-3">
        {advantages.map((adv, index) => (
          <motion.div
            key={index}
            className="glass-panel"
            style={{ 
              padding: '2rem', 
              textAlign: 'center', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              minHeight: '150px'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.4)' }}
          >
            <h4 style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: '1.5' }}>
              {adv}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
