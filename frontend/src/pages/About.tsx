import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/about.css';

const About: React.FC = () => {
    return (
        <Layout>
            <div className="about-section">
                <div className="about-columns">
                    <div className="about-column">
                        <h2>About Us</h2>
                        <p>
                            We make renting easy by offering hassle-free solutions for mid-to-long-term housing needs.
                        </p>
                        <p>
                            <strong>We’re more than just a hotel, hostel, or PG—we’re Oh My Place!</strong>
                        </p>
                        <p>
                            Welcome to Oh My Place, your ultimate destination for fully furnished co-living, corporate suites, and luxury PG in Noida.
                        </p>
                        <p>
                            We’re dedicated to helping professionals save money and enhance employee retention. Our services encompass co-living spaces and PGs, supported by a dedicated relationship manager, catering to corporate workforce stay requirements. Our resident community is exclusively comprised of KYC-verified working professionals, ensuring a secure living environment. Discover hassle-free living at Oh My Place – your preferred choice for co-living spaces and branded PGs in Noida.
                        </p>
                    </div>
                    <div className="about-column">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to transform mid-to-long-term housing by revolutionizing the plug-and-play home experience through digital innovation and fostering a sense of belonging.
                        </p>
                        <p>
                            We understand your professional journey and the challenges that come with relocating, moving in, and moving out. Through our carefully selected home-style facilities, amenities, community, and safety, we provide a caring and exciting living environment.
                        </p>
                        <p>
                            At Ohmyplace Solutions Pvt Ltd, we believe in the power of teamwork. Our core team is made up of experts in corporate housing and property management. Together, we work closely to ensure our clients receive the best service possible. Our full-time employees are experienced, reliable, and certified. Plus, we are licensed, bonded, and insured for added peace of mind.
                        </p>
                    </div>
                </div>
                <div className="about-button">
                    <button>Find Rooms!</button>
                </div>
            </div>
        </Layout>
    );
};

export default About;
