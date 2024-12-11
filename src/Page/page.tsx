import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Search icon
import { BiCurrentLocation } from 'react-icons/bi'; // Location icon
import styles from './page.module.scss';
import Card from '../components/card';

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Nutrition');

  const cards = [
    {
      image: 'nutrition.jpg',
      title: 'Nutrition',
      description:
        'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
      stat: '121/80 mmHg',
    },
    {
      image: 'physical-activity.jpg',
      title: 'Physical activity',
      description:
        'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
      stat: '32 minutes',
    },
    {
      image: 'restorative-sleep.jpg',
      title: 'Restorative sleep',
      description: 'Consistent, quality sleep improves brain function and physical health.',
      stat: '8 hours',
    },
    {
      image: 'stress-management.jpg',
      title: 'Stress management',
      description: 'Effective stress management techniques improve mental clarity and emotional stability.',
      stat: 'Relaxed',
    },
    {
      image: 'social-connection.jpg',
      title: 'Social connection',
      description: 'Strong social ties enhance well-being and reduce the risk of chronic illnesses.',
      stat: 'Community',
    },
    {
      image: 'substance-abuse.jpg',
      title: 'Substance abuse',
      description: 'Reducing substance use significantly improves overall physical and mental health.',
      stat: 'Healthier habits',
    },
  ];

  const tabs = cards.map((card) => card.title);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const tabIndex = cards.findIndex((card) => card.title === tab);
    setCurrentIndex(tabIndex);
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="provital-logo.png" alt="ProVital Logo" />
          <span>ProVital</span>
        </div>
        <div
          className={`${styles.navLinks} ${isNavOpen ? styles.navOpen : ''}`}
        >
          <a href="#">List your practice</a>
          <a href="#">For Employers</a>
          <a href="#">Courses</a>
          <a href="#">Books</a>
          <a href="#">Speakers</a>
          <a href="#">Doctors</a>
          <a href="#">Login / Signup</a>
        </div>
        <button
          className={styles.navToggle}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          &#9776;
        </button>
      </nav>

      {/* Main Header Section */}
      <header className={styles.header}>
        <h1>
          Book an appointment with <span>lifestyle medicine</span> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Condition, procedure, specialty..." />
          <input type="text" placeholder="City, state, or zipcode" />
          <input type="text" placeholder="Insurance carrier" />
          <button>
            <FiSearch className={styles.buttonIcon} />
            Find now
          </button>
        </div>
      </header>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2>HOW IT WORKS</h2>
        <h3>Lifestyle as medicine: The six pillars</h3>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={activeTab === tab ? styles.activeTab : styles.inactiveTab}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.carousel}>
          <div
            className={styles.cardContainer}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                stat={card.stat}
              />
            ))}
          </div>
          <button className={styles.nextButton} onClick={handleNext}>
            <span>&rarr;</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
