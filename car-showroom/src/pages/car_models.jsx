import { useNavigate } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Toyota Camry', price: '₹28,00,000', fuel: 'Petrol', seats: 5 },
  { id: 2, name: 'Honda City', price: '₹12,00,000', fuel: 'Petrol', seats: 5 },
  { id: 3, name: 'Hyundai Creta', price: '₹15,00,000', fuel: 'Diesel', seats: 5 },
  { id: 4, name: 'Tata Nexon EV', price: '₹18,00,000', fuel: 'Electric', seats: 5 },
  { id: 5, name: 'Mahindra XUV700', price: '₹22,00,000', fuel: 'Diesel', seats: 7 },
  { id: 6, name: 'Kia Seltos', price: '₹16,00,000', fuel: 'Petrol', seats: 5 },
];

function CarModels() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h2>Our Car Models</h2>
      <div className="car-grid">
        {cars.map(car => (
          <div className="car-card" key={car.id}>
            <div className="car-icon">car</div>
            <h3>{car.name}</h3>
            <p><strong>Price:</strong> {car.price}</p>
            <p><strong>Fuel:</strong> {car.fuel}</p>
            <p><strong>Seats:</strong> {car.seats}</p>
            <div className="card-actions">
              <button onClick={() => navigate('/booking', { state: { car: car.name } })}>Book Now</button>
              <button className="secondary" onClick={() => navigate('/emi', { state: { price: car.price, car: car.name } })}>EMI</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarModels;
