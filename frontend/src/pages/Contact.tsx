import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import '../assets/css/contact.css';

const Contact: React.FC = () => {
  useEffect(() => {
    // Load any required scripts or initialize components if necessary
  }, []);

  return (
    <Layout strict={false}>
      <div className="contact-us-container">
        {/* Main Heading */}
        <h1 className="main-heading">CONTACT US</h1>

        {/* Image below heading */}
        <img
          src="src/assets/img/contact-img.webp" // Replace with the actual path to your image
          alt="Contact Us"
          className="contact-image"
        />

        {/* Flex container for address, customer care, and sales email */}
        <div className="contact-row">
          <section className="contact-section">
            <h2>Registered Address</h2>
            <p>
              FF 258, Gaur City Center, Sector 4,<br />
              Greater Noida,<br />
              U.P. - 201009, India
            </p>
          </section>

          <section className="contact-section">
            <h2>Customer Care</h2>
            <p>+91 8800118508</p>
          </section>

          <section className="contact-section">
            <h2>Sales Email</h2>
            <p>
              <a href="mailto:hello@ohmyplace.com">hello@ohmyplace.com</a>
            </p>
          </section>
        </div>

        {/* Full-screen map section */}
        <section className="map-fullscreen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19814.984380551206!2d77.42504067182854!3d28.60495264354793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3da992653f%3A0xb97fb9260e75647a!2sOh%20My%20Place!5e0!3m2!1sen!2sus!4v1721975950220!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
