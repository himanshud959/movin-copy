// FAQ.tsx
import React, { useState } from 'react';
import '../assets/css/FAQ.css';
import Layout from '../components/Layout';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is PG in Noida and how does it work?',
    answer: 'PG (Paying Guest) accommodation in Noida provides affordable housing solutions for working professionals and students. It typically includes basic amenities and may offer meals and housekeeping services. PG accommodations are usually rented on a monthly basis.',
  },
  {
    question: 'What is Co-living in Noida?',
    answer: 'Co-living in Noida refers to a modern lifestyle choice where individuals share living spaces and amenities while maintaining their privacy. Co-living spaces often include community events, fully furnished rooms, and a range of services aimed at enhancing the living experience.',
  },
  {
    question: 'What is the cost of living in Noida?',
    answer: 'The cost of living in Noida varies based on factors such as location, type of accommodation, and lifestyle. On average, living costs may include rent, utilities, groceries, transportation, and personal expenses. PG and co-living options can offer more affordable solutions compared to traditional rentals.',
  },
  {
    question: 'How much does PG cost in Noida?',
    answer: 'The cost of PG in Noida can range from INR 5,000 to INR 15,000 per month, depending on the location, facilities, and services offered. Prices may vary based on proximity to key areas and the quality of accommodation.',
  },
  {
    question: 'Why is Oh My Place the best PG in Noida?',
    answer: 'Oh My Place stands out as the best PG in Noida due to its prime locations, exceptional facilities, and affordable pricing. We offer a range of amenities, including high-speed internet, meals, housekeeping, and a vibrant community, making it the ideal choice for professionals and students.',
  },
  {
    question: 'What are the differences between a PG and Co-living?',
    answer: 'PG (Paying Guest) accommodations typically offer basic amenities with a focus on privacy and affordability. Co-living spaces provide a more communal living experience with additional features like community events, fully furnished rooms, and more inclusive services. Co-living is often geared towards enhancing social interactions and providing a more lifestyle-oriented experience.',
  },
  {
    question: 'Are there PG options near Amity University?',
    answer: 'Yes, there are several PG options near Amity University in Noida. These accommodations are conveniently located to provide easy access to the campus while offering various amenities and services.',
  },
  {
    question: 'What are the PG options in Sector 135?',
    answer: 'Sector 135 in Noida offers a variety of PG accommodations with different features and price ranges. Whether you\'re looking for basic facilities or more luxurious options, there are choices available to suit your needs.',
  },
  {
    question: 'Are there PG options near Sector 62?',
    answer: 'Yes, you can find multiple PG accommodations near Sector 62 in Noida. These options provide proximity to business hubs and amenities, making them a convenient choice for professionals and students.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
