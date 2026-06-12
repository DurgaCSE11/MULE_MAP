import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, AlertTriangle, ShieldAlert, ArrowDownUp } from 'lucide-react';

const mockChartData = [
  { time: '08:00', total: 4000, highRisk: 24 },
  { time: '09:00', total: 3000, highRisk: 13 },
  { time: '10:00', total: 2000, highRisk: 98 },
  { time: '11:00', total: 2780, highRisk: 39 },
  { time: '12:00', total: 1890, highRisk: 48 },
  { time: '13:00', total: 2390, highRisk: 38 },
  { time: '14:00', total: 3490, highRisk: 43 },
];

const StatCard = ({ title, value, icon, color, trend }) => (
  <motion.div 
    className="glass-panel" 
    style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
    whileHover={{ y: -5 }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>{title}</span>
      <div style={{ padding: '0.5rem', background: `rgba(${color}, 0.1)`, borderRadius: '8px' }}>
        {icon}
      </div>
    </div>
    <div>
      <h3 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{value}</h3>
      <span style={{ fontSize: '0.8rem', color: trend.includes('+') ? 'var(--danger)' : 'var(--success)' }}>
        {trend} from last hour
      </span>
    </div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="page-title">Overview Dashboard</h2>
      
      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        <StatCard title="Total Transactions (24h)" value="142,394" icon={<ArrowDownUp size={24} color="var(--primary-accent)" />} color="59, 130, 246" trend="-2%" />
        <StatCard title="High Risk Alerts" value="342" icon={<AlertTriangle size={24} color="var(--danger)" />} color="239, 68, 68" trend="+12%" />
        <StatCard title="Detected Mule Networks" value="18" icon={<ShieldAlert size={24} color="var(--warning)" />} color="245, 158, 11" trend="+3" />
        <StatCard title="Auto-Blocked Value" value="$4.2M" icon={<Activity size={24} color="var(--success)" />} color="16, 185, 129" trend="-$100k" />
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>Transaction Volume vs High Risk Alerts</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary-accent)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--primary-accent)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--danger)" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="var(--danger)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="time" stroke="var(--text-muted)" />
            <YAxis stroke="var(--text-muted)" />
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
            <Tooltip contentStyle={{ backgroundColor: 'var(--bg-sidebar)', border: '1px solid var(--border-light)', borderRadius: '8px' }} />
            <Area type="monotone" dataKey="total" stroke="var(--primary-accent)" fillOpacity={1} fill="url(#colorTotal)" />
            <Area type="monotone" dataKey="highRisk" stroke="var(--danger)" fillOpacity={1} fill="url(#colorRisk)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default Dashboard;
