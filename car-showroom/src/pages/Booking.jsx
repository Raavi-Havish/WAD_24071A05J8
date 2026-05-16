import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Booking() {
  const { state } = useLocation();
  const [form, setForm] = useState({ name: '', phone: '', date: '', car: state?.car || '' });
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  if (booked) return (
    <div className="page-container">
      <div className="form-card success">
        <h2> Booking has been Confirmed!</h2>
        <p><strong>{form.name}</strong>, your test drive for <strong>{form.car}</strong> is booked on <strong>{form.date}</strong>.</p>
        <p>We will contact you soon at <strong>{form.phone}</strong>.</p>
        <button onClick={() => setBooked(false)}>Book Another</button>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="form-card">
        <h2>Book a Test Drive</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Phone Number" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          <input placeholder="Car Model" required value={form.car} onChange={e => setForm({ ...form, car: e.target.value })} />
          <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
