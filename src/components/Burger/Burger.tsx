import React from 'react';
import styles from './Burger.module.css';

interface BurgerProps {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}

const Burger: React.FC<BurgerProps> = ({ className, isOpen, onClick }) => {
  const burgerClass = isOpen ? `${styles.burger} ${styles.open}` : styles.burger;

  return (
    <div className={`${styles.container} ${className}`}>
      <button className={burgerClass} onClick={onClick}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </div>
  );
};

export default Burger;
