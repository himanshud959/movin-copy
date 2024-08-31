import React, { useEffect, useRef } from "react";
import "../assets/css/YourPreference.css";

const YourPreference: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          sectionRef.current.classList.add("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="your-preference" ref={sectionRef}>
      <h2>YOUR PREFERENCE</h2>
      <p>A Place for Singles, Couples, and Friends!</p>
      <div className="preference-options">
        <div className="preference-option">
          <img src="src/assets/img/private-room-1.jpg" alt="Private Room" />
          <h3>Private Rooms</h3>
        </div>
        <div className="preference-option">
          <img src="src/assets/img/shared-room-1.jpg" alt="Shared Room" />
          <h3>Shared Rooms</h3>
        </div>
        <div className="preference-option">
          <img src="src/assets/img/apartment.jpg" alt="Apartment" />
          <h3>Apartments</h3>
        </div>
      </div>
    </section>
  );
};

export default YourPreference;
