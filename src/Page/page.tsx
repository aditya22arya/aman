import React from "react";
import styles from "./page.module.scss"
import Card from "../components/card";

const Page = () => {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/Vector.svg" alt="" />ProVital</div>
        <ul className={styles.navLinks}>
          <li>List your practice</li>
          <li>For Employers</li>
          <li>Courses</li>
          <li>Books</li>
          <li>Speakers</li>
          <li>Doctors</li>
          <li>Login / Signup</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Book an appointment with <br /><span>lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Condition, procedure, specialty..." />
          <input type="text" placeholder="City, state, or zipcode" />
          <input type="text" placeholder="Insurance carrier" />
          <button>Find now</button>
        </div>
      </section>

      {/* Card Section */}
      <section className={styles.cardSection}>
        <h2>HOW IT WORKS</h2>
        <h3>
          <span>Lifestyle as medicine:</span> The six pillars
        </h3>
        <div className={styles.pillButtons}>
          <button className={styles.active}>Nutrition</button>
          <button>Physical activity</button>
          <button>Restorative sleep</button>
          <button>Stress management</button>
          <button>Social connection</button>
          <button>Substance abuse</button>
        </div>
        <div className={styles.cards}>
          <Card
            image="/Rectangle 152.png"
            title="Nutrition"
            description="Evidence supports the use of a whole food, plant-predominant diet to prevent, treat, and reverse chronic illness."
            icon="❤"
            iconText="121/80 mmHg"
          />
          <Card
            image="/Rectangle 154.png"
            title="Physical activity"
            description="Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease."
            icon="⏱"
            iconText="32 minutes"
          />
          <Card
            image="/Rectangle 156.png"
            title="Restorative sleep"
            description="Consistent, quality sleep is vital to restoring function and physical health."
            icon="🛌"
            iconText="8 hours"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;