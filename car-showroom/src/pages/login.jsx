import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ 
    email: '', 
    password: '' 
});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${form.email}!`);
    navigate('/cars');
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email" placeholder="Email" required
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password" placeholder="Password" required
            value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
