import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '',
     email: '',
      message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) return (
    <div className="page-container">
      <div className="form-card success">
        <h2> Message Sent by Havish Raavi!</h2>
        <p>Thanks <strong>{form.name}</strong>, we'll get back to you at <strong>{form.email}</strong> shortly.</p>
        <button onClick={() => { setForm({ name: '', email: '', message: '' }); setSent(false); }}>Send Another</button>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="form-card">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p> VNR Vignana Jyothi Institute of Technology ,Hyderabad, India, Pin-500018</p>
          <p> +91 75691 52298</p>
          <p> 24071a05j8@vnrvjiet.in</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <textarea placeholder="Your Message" rows="4" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
