import React from 'react';
import styles from './card.module.scss';

interface CardProps {
  image: string;
  title: string;
  description: string;
  stat: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, stat }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.statBadge}>
          <span role="img" aria-label="Heart">
            💙
          </span>
          {stat}
        </div>
      </div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
