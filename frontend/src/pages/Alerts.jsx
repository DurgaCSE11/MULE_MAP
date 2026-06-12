import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertOctagon, BrainCircuit, ShieldCheck, X } from 'lucide-react';

const initialAlerts = [
  {
    id: 'ALT-4412',
    transactionId: 'TXN-98234',
    account: 'ACC-1029',
    riskScore: 0.92,
    timestamp: '2 mins ago',
    shapValues: [
      { feature: 'Velocity (24h)', impact: '+0.34', reason: 'Abnormal spike in transaction frequency' },
      { feature: 'Account Dormancy', impact: '+0.28', reason: 'Account active after 6 months of inactivity' },
      { feature: 'Device Distance', impact: '+0.15', reason: 'Login 2000 miles from usual location' },
      { feature: 'Network Centrality', impact: '+0.10', reason: 'Linked to 3 known suspicious nodes' }
    ]
  },
  {
    id: 'ALT-4413',
    transactionId: 'TXN-98237',
    account: 'ACC-1029',
    riskScore: 0.95,
    timestamp: '5 mins ago',
    shapValues: [
      { feature: 'Velocity (1h)', impact: '+0.41', reason: 'Multiple rapid transfers' },
      { feature: 'Beneficiary Count', impact: '+0.25', reason: 'Funds distributed to 10+ new accounts' },
      { feature: 'Amount Anomaly', impact: '+0.12', reason: 'Amount deviates from historical average by 400%' }
    ]
  }
];

const Alerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleAction = (id, action) => {
    alert(`Action: ${action} applied to alert ${id}`);
    setAlerts(alerts.filter(a => a.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="page-title">Risk Alerts & Explainability (XAI)</h2>
      
      {alerts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--success)' }}>
          <ShieldCheck size={64} style={{ margin: '0 auto 1rem' }} />
          <h3>No pending alerts</h3>
          <p style={{ color: 'var(--text-muted)' }}>All clear! You have reviewed all high-risk transactions.</p>
        </div>
      ) : (
        <div className="grid-2">
          <AnimatePresence>
            {alerts.map((alert, index) => (
              <motion.div 
                key={alert.id}
                className="glass-panel"
                style={{ padding: '2rem', border: '1px solid rgba(239, 68, 68, 0.4)', boxShadow: '0 0 15px rgba(239, 68, 68, 0.1)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <AlertOctagon color="var(--danger)" />
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--danger)' }}>Alert {alert.id}</h3>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{alert.timestamp} • {alert.transactionId} • {alert.account}</p>
                  </div>
                  <div className="badge badge-high" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                    Score: {alert.riskScore}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <BrainCircuit size={18} color="var(--secondary-accent)" />
                    <h4 style={{ color: 'var(--text-main)' }}>SHAP Contributions</h4>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {alert.shapValues.map((shap, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <span style={{ fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>{shap.feature}</span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{shap.reason}</span>
                        </div>
                        <span style={{ color: 'var(--danger)', fontWeight: 700 }}>{shap.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                  <button 
                    onClick={() => handleAction(alert.id, 'Freeze Account')}
                    style={{ 
                      background: 'var(--danger)', 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.8rem', 
                      borderRadius: '8px', 
                      flex: 1, 
                      fontWeight: 600, 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#dc2626'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'var(--danger)'}
                  >
                    <ShieldCheck size={18} /> Freeze Account
                  </button>
                  <button 
                    onClick={() => handleAction(alert.id, 'Dismiss')}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      color: 'var(--text-main)', 
                      border: '1px solid var(--border-light)', 
                      padding: '0.8rem', 
                      borderRadius: '8px', 
                      flex: 1, 
                      fontWeight: 600, 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    <X size={18} /> Dismiss
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

export default Alerts;
