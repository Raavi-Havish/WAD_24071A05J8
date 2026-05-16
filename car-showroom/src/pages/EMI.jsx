import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function EMI() {
  const { state } = useLocation();
  const defaultPrice = state?.price ? parseInt(state.price.replace(/[^0-9]/g, '')) : 1500000;

  const [principal, setPrincipal] = useState(defaultPrice);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(60);

  const monthlyRate = rate / 12 / 100;
  const emi = Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1));
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - principal;

  return (
    <div className="page-container">
      <h2>EMI Calculator {state?.car ? `— ${state.car}` : ''}</h2>
      <div className="emi-container">
        <div className="form-card">
          <label>Loan Amount (₹)</label>
          <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} />
          <label>Interest Rate (% per annum)</label>
          <input type="number" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} />
          <label>Tenure (months)</label>
          <input type="number" value={tenure} onChange={e => setTenure(Number(e.target.value))} />
        </div>
        <div className="emi-result">
          <div className="emi-box">
            <span>Monthly EMI</span>
            <h3>₹{emi.toLocaleString()}</h3>
          </div>
          <div className="emi-box">
            <span>Total Interest</span>
            <h3>₹{totalInterest.toLocaleString()}</h3>
          </div>
          <div className="emi-box">
            <span>Total Amount</span>
            <h3>₹{totalAmount.toLocaleString()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMI;
