import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const workflowSteps = [
  {
    title: "Data Preparation & Imbalance Handling",
    content: "Handles missing values, noisy data, and standardizes transaction attributes. Uses advanced imbalance-handling techniques like SMOTE and class-weighted learning to ensure rare fraud events are detected without bias toward legitimate transactions."
  },
  {
    title: "Feature Engineering",
    content: "Analyzes customer behavior over time. Tracks transaction velocity (frequency/volume spikes), mule account dormancy patterns, device/location consistency, and relationships through complex fund-transfer chains."
  },
  {
    title: "Hybrid Machine Learning Framework",
    content: "Utilizes Supervised Learning Models (XGBoost, LightGBM) for known fraud patterns alongside Unsupervised Anomaly Detection (Isolation Forest, Auto encoders) to identify previously unseen fraud strategies."
  },
  {
    title: "Real-Time Risk Scoring & Explainability",
    content: "Assigns a dynamic score (0 to 1). Low Risk (<0.5) approved, Medium (0.5-0.8) for review, High (>0.8) immediate alert. Employs SHAP (Explainable AI) to highlight key factors behind the risk assessment."
  }
];

const Workflow = () => {
  return (
    <section className="section-container" style={{ background: 'linear-gradient(180deg, rgba(7,9,15,0) 0%, rgba(59,130,246,0.05) 100%)' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical <span className="text-gradient">Workflow</span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {workflowSteps.map((step, index) => (
          <motion.div
            key={index}
            className="glass-panel"
            style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>
              <CheckCircle2 size={28} color="var(--primary-accent)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--text-main)' }}>
                {index + 1}. {step.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {step.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
