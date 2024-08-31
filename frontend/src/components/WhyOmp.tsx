import React from 'react';
import '../assets/css/whyOmp.css';

const WhyOMP: React.FC = () => (
        <section className="why-omp">
            <div className="why-omp-content">
                <h2 className="heading">WHY CHOOSE OH MY PLACE?</h2>
                <p className="subheading">
                    We offer exclusive homes designed for professionals – Singles, Couples, and Small Families.<br/>
                    Explore our <span className="highlight-dark">CO-LIVING/PG</span> for hassle-free living. If you’re considering a longer stay, 
                    our <span className="highlight-dark">SHORT STAY HOTEL</span> offers additional benefits.<br/>
                    Daily rates apply for stays under 1 month.<br/>
                    No deposit is required for stays under 3 months.<br/>
                    For longer stays, get our budget-friendly monthly rates.
                </p>
                <button className="book-now-button">BOOK NOW</button>
            </div>
        </section>
    );

export default WhyOMP;
