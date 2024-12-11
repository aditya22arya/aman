import React from "react";
import styles from "./card.module.scss";

interface CardProps {
  image: string;
  title: string;
  description: string;
  icon: string;
  iconText: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, icon, iconText }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <div className={styles.iconBadge}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.iconText}>{iconText}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
