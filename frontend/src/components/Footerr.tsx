import React from 'react';
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import '../assets/css/footerr.css';

const Footerr: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Private Rooms */}
        <div className="footer-column">
          <h3>Private Rooms for rent in Noida</h3>
          <ul>
            <li><a href="#private-room-1">Single Sharing Private 1RK Rooms Near Noida Sector 142</a></li>
            <li><a href="#private-room-2">Single Sharing Room – PG in Noida Sector 44</a></li>
            <li><a href="#private-room-3">Single Sharing Room Near Noida Sector 93 & 132</a></li>
            <li><a href="#private-room-4">Single Sharing Room – PG in Noida Sector 58 Near 62</a></li>
            <li><a href="#private-room-5">Single Sharing Room – PG in Noida Sector 135</a></li>
          </ul>
        </div>

        {/* Column 2: Shared Rooms */}
        <div className="footer-column">
          <h3>Shared Rooms for rent in Noida</h3>
          <ul>
            <li><a href="#shared-room-1">Double Sharing Room in 1RK Near Noida Sector 142</a></li>
            <li><a href="#shared-room-2">Double Sharing Room Near Noida Sector 93 & 132</a></li>
            <li><a href="#shared-room-3">Double Sharing Room – PG in Noida Sector 58 Near 62</a></li>
            <li><a href="#shared-room-4">Double Sharing Room – PG in Noida Sector 135</a></li>
            <li><a href="#shared-room-5">Double Sharing Rooms – PG in Noida Sector 44</a></li>
          </ul>
        </div>

        {/* Column 3: Apartments */}
        <div className="footer-column">
          <h3>Apartments for rent in Noida</h3>
          <ul>
            <li><a href="#apartment-1">OMP Co-living PG Apartment Noida Sector 168</a></li>
            <li><a href="#apartment-2">Preoccupied Apartment Rooms in Noida Sector 137</a></li>
            <li><a href="#apartment-3">Preoccupied Apartment Rooms in Noida Sector 143</a></li>
            <li><a href="#apartment-4">Preoccupied Apartment Rooms in Noida Sector 137</a></li>
            <li><a href="#apartment-5">Preoccupied Apartment Rooms in Noida Sector 143</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-info">
        {/* Column 4: About OH MY PLACE! */}
        <div className="footer-about">
          <h3>About OH MY PLACE!</h3>
          <p>Welcome to Oh My Place, your ultimate destination for fully furnished co-living, corporate suites, and luxury PG accommodations in Noida. We’re dedicated to helping professionals save money and enhance employee retention. Our services encompass co-living spaces and PGs, supported by a dedicated relationship manager, catering to corporate workforce stay requirements. Our resident community is exclusively comprised of KYC-verified working professionals, ensuring a secure living environment. Discover hassle-free living at Oh My Place – your preferred choice for co-living spaces and branded PGs in Noida.</p>
        </div>

        {/* Column 5: Contact Us */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Office - FF 258, Gaur City Center, Sector 4, Greater Noida West, UP - 201009</p>
          <p><FaPhoneAlt /> 88 00 11 8508</p>
          <p><FaEnvelope /> <a href="mailto:hello@ohmyplace.com">hello@ohmyplace.com</a></p>
          <p><FaGlobe /> <a href="https://www.ohmyplace.com/" target="_blank" rel="noopener noreferrer">https://www.ohmyplace.com/</a></p>
        </div>

        {/* Column 6: Social Media Links */}
        <div className="footer-social">
          <h3>We are social!</h3>
          <a href="https://www.facebook.com/OhMyPlaceColiving" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/ohmyplace/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ohmyplace.com_coliving/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@OhMyPlace.Com_CoLiving?feature=shared" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Notes Section */}
      <div className="footer-notes">
        <p className="footer-copyright">Copyright &copy; {year} OH MY PLACE!. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/terms">Terms and Conditions</a></li>
          <li><a href="/payment-refund">Payment & Refund Policy</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footerr;
