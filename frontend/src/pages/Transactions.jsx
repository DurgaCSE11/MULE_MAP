import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const mockTransactions = [
  { id: 'TXN-98234', account: 'ACC-1029', amount: '$45,000', type: 'Wire Transfer', riskScore: 0.92, status: 'Blocked' },
  { id: 'TXN-98235', account: 'ACC-5521', amount: '$150', type: 'Card Payment', riskScore: 0.12, status: 'Approved' },
  { id: 'TXN-98236', account: 'ACC-8832', amount: '$12,500', type: 'ACH Transfer', riskScore: 0.65, status: 'Review' },
  { id: 'TXN-98237', account: 'ACC-1029', amount: '$45,000', type: 'Wire Transfer', riskScore: 0.95, status: 'Blocked' },
  { id: 'TXN-98238', account: 'ACC-2291', amount: '$50', type: 'P2P Transfer', riskScore: 0.05, status: 'Approved' },
  { id: 'TXN-98239', account: 'ACC-9943', amount: '$8,200', type: 'Wire Transfer', riskScore: 0.78, status: 'Review' },
  { id: 'TXN-98240', account: 'ACC-3312', amount: '$1,200', type: 'Card Payment', riskScore: 0.22, status: 'Approved' },
];

const getRiskBadge = (score) => {
  if (score >= 0.8) return <span className="badge badge-high">High ({score})</span>;
  if (score >= 0.5) return <span className="badge badge-medium">Medium ({score})</span>;
  return <span className="badge badge-low">Low ({score})</span>;
};

const Transactions = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="page-title">Live Transactions</h2>
      
      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Account</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Risk Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockTransactions.map((txn, index) => (
              <motion.tr 
                key={txn.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td style={{ fontFamily: 'monospace', color: 'var(--primary-accent)' }}>{txn.id}</td>
                <td>{txn.account}</td>
                <td>{txn.type}</td>
                <td style={{ fontWeight: 600 }}>{txn.amount}</td>
                <td>{getRiskBadge(txn.riskScore)}</td>
                <td>
                  <button 
                    className="btn-primary" 
                    style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                    onClick={() => {
                      if (txn.riskScore >= 0.8) {
                        navigate('/alerts');
                      } else {
                        alert(`Viewing transaction ${txn.id} - Status: ${txn.status}`);
                      }
                    }}
                  >
                    View
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Transactions;
