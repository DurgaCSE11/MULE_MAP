const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'MULE_MAP Backend is running' });
});

// Placeholder route for risk assessment
app.post('/api/assess-risk', (req, res) => {
    // In a real scenario, this would call the ML model
    const mockRiskScore = Math.random();
    
    res.json({
        transactionId: req.body.transactionId || 'TXN12345',
        riskScore: mockRiskScore,
        riskLevel: mockRiskScore < 0.5 ? 'Low' : mockRiskScore < 0.8 ? 'Medium' : 'High',
        explainability: ['Unusual velocity', 'New device used']
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
