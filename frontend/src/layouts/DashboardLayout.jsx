import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, ArrowRightLeft, BellRing, Network, ShieldCheck } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';

const DashboardLayout = () => {
  return (
    <>
      <ThreeScene />
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', padding: '0 1rem' }}>
            <ShieldCheck size={32} color="var(--primary-accent)" />
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }} className="text-gradient">MULE MAP</h1>
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
              <LayoutDashboard size={20} />
              Overview
            </NavLink>
            <NavLink to="/transactions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <ArrowRightLeft size={20} />
              Transactions
            </NavLink>
            <NavLink to="/alerts" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <BellRing size={20} />
              Risk Alerts
            </NavLink>
            <NavLink to="/network" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <Network size={20} />
              Mule Networks
            </NavLink>
          </nav>
          
          <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Status: <span style={{ color: 'var(--success)' }}>Active Monitoring</span></p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Model: Hybrid Ensemble v1.2</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
