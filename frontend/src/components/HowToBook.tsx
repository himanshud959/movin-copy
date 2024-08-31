import React, { useEffect, useRef, useState } from 'react'
import '../assets/css/HowToBook.css'

const HowToBook: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section className="how-to-book" ref={ref}>
      <h2 className={isVisible ? 'show' : ''}>HOW TO BOOK</h2>
      <p>
        Book comfortable, fully furnished Studio Rooms, 1RKs, and Flatmates in
        Noida in just three easy steps!
      </p>
      <div className="steps">
        <div className="step">
          <h3>1. Schedule a Visit</h3>
          <p>
            Choose between managed apartments and co-living rooms in Noida.
            Visit the property online or offline beforehand.
          </p>
        </div>
        <div className="step">
          <h3>2. Book Online</h3>
          <p>
            Use an easy online form to apply and book the home you want. Our
            Sales Team will call you to confirm your reservation.
          </p>
        </div>
        <div className="step">
          <h3>3. Move hassle-free</h3>
          <p>
            Once everything is set up, it’s time to move in. Just follow the
            provided directions and bring your luggage!
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowToBook
