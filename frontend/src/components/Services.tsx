import React, { useEffect } from 'react';
import '../assets/css/services.css';

const services = [
    { name: <h1>High-Speed Internet</h1>, imgSrc: 'src/assets/img/wifi.webp' },
    { name: <h1>Community Cleaning</h1>, imgSrc: 'src/assets/img/community.webp' },
    { name: <h1>Fresh Meal Facility</h1>, imgSrc: 'src/assets/img/fresh-meal.webp' },
    { name: <h1>Furnished Rooms</h1>, imgSrc: 'src/assets/img/bed.webp' },
    { name: <h1>Secure Homes</h1>, imgSrc: 'src/assets/img/secure.webp' },
    { name: <h1>Technology Enabled</h1>, imgSrc: 'src/assets/img/technology.webp' },
    { name: <h1>Housekeeping</h1>, imgSrc: 'src/assets/img/housekeeping.webp' },
    { name: <h1>Community Living</h1>, imgSrc: 'src/assets/img/living.webp' },
    { name: <h1>Resident Support</h1>, imgSrc: 'src/assets/img/resident.webp' },
];

const Services: React.FC = () => {
  useEffect(() => {
    const heading = document.querySelector('.services-header h2');
    if (heading) {
      setTimeout(() => {
        heading.classList.add('show');
      }, 100); // Add a small delay to ensure the CSS transition applies correctly
    }
  }, []);

  return (
    <section className="services">
      <div className="services-header">
        <h2>AMENITIES OFFERED</h2>
        <p>Unlock a Real Fully Furnished Co-Living in Noida!</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.imgSrc} alt={String(service.name)} className="service-icon" />
            <p className="service-name">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
