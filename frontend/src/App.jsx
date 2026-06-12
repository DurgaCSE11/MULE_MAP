import React from 'react';
import ThreeScene from './components/ThreeScene';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Workflow from './components/Workflow';
import Advantages from './components/Advantages';

function App() {
  return (
    <div className="app-container">
      <ThreeScene />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Architecture />
        <Workflow />
        <Advantages />
        
        <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem', color: 'var(--text-muted)' }}>
          <p>© {new Date().getFullYear()} MULE MAP. AI/ML-driven Fraud Detection Framework.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
