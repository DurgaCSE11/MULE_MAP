# Mule Map 🗺️💰
**Developed by Team DhanVEER**
<br>
**1.Nancy Panda(Team Leader,UI/UX Designer)**
<br>
**2.Durga Prasad Mahapatra(Frontend Developer)**
<br>
**3.**
<br>
**4.**
<br>

An advanced, scalable AI/ML-driven fraud detection framework designed to identify sophisticated financial fraud, money laundering, and mule account ecosystems in near real-time. Unlike traditional rule-based systems, **Mule Map** combines behavioral analytics, graph-based network tracing, and Explainable AI (XAI) to map out full fraudulent networks rather than just flagging isolated transactions.

---

## 🚀 Key System Features

* **Hybrid Machine Learning Framework:** Combines supervised ensemble models (XGBoost, LightGBM) to catch known fraud signatures with unsupervised anomaly detection (Isolation Forest, Autoencoders) to uncover emerging, unseen fraud tactics.
* **Behavioral & Velocity Tracking:** Analyzes temporal patterns, tracking transaction frequency and volume across 10-minute, 1-hour, and 24-hour windows, alongside account dormancy activation flags.
* **Graph-Based Network Analysis:** Models transactions as interconnected node-link networks to uncover hidden money-laundering chains and coordinated mule operations.
* **Explainable AI (XAI):** Integrates **SHAP (SHapley Additive Explanations)** to provide transparent, interpretable reasons behind every flagged risk score for compliance and audit teams.
* **Imbalance Handling:** Built-in preprocessing pipeline utilizing SMOTE (Synthetic Minority Over-sampling Technique) and class-weighted learning to handle highly imbalanced banking datasets.

---

## 💻 Frontend Dashboard Architecture

The frontend is designed as an interactive, real-time control center for fraud analysts and compliance teams. It consists of four core modules:

### 1. CSV Data Ingestion & Preprocessing Hub
* **Drag-and-Drop Uploader:** Smooth interface for loading raw transaction data CSVs.
* **Data Health Metrics:** Live tracking of preprocessing actions (handling missing values, removing duplicate records, and standardizing formats).
* **SMOTE Balancing Visualization:** Interactive charts demonstrating the class distribution before and after handling dataset imbalances.

### 2. Live Risk Monitoring Stream
* **Dynamic Risk Scoring:** Real-time color-coded alerts based on transaction probability scores:
    * 🟢 **Low Risk (< 0.5):** Automatically approved.
    * 🟡 **Medium Risk (0.5 - 0.8):** Sent to fraud review team for manual investigation.
    * 🔴 **High Risk (> 0.8):** Instant critical alert with automated temporary account hold functionality.

### 3. Interactive SHAP & Metadata View
* **Explainability Graph:** Visual breakdown (force plots/bar charts) of the exact SHAP features pushing up a transaction's risk score (e.g., rapid velocity, location inconsistencies).
* **Feature Log Panel:** Deep-dive look into generated behavioral features, including device IDs, IP changes, and geo-distance calculations.

### 4. Graph Network Visualizer
* **Interactive Node-Link Map:** Canvas/WebGL-powered network graph mapping account relationships.
* **Mule Chain Highlighting:** Visually traces complex fund-transfer chains across multiple beneficiary accounts to locate the underlying fraud ecosystem.

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** React.js / Next.js (App Router)
* **Styling & UI Components:** Tailwind CSS + Shadcn UI / Mantine
* **Data Visualization:** Recharts / Chart.js
* **Network Graph Rendering:** Cytoscape.js / React Force Graph
* **Real-time Communication:** WebSockets / Server-Sent Events (SSE)

### Backend & Machine Learning (Pipeline Reference)
* **Languages & Tools:** Python, FastAPI / Flask
* **ML Libraries:** Scikit-learn, XGBoost, LightGBM, Imbalanced-learn (SMOTE)
* **Explainability:** SHAP Library

---

## 📦 Getting Started

### Prerequisites
* Node.js (v18.x or higher)
* npm / pnpm / yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/mule-map.git](https://github.com/your-username/mule-map.git)
   cd mule-map
