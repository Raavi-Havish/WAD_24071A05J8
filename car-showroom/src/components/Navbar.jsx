import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/cars', label: 'Car Models' },
    { to: '/booking', label: 'Booking' },
    { to: '/emi', label: 'EMI Details' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand"> Havish Car Showroom</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}>
            <Link to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
