import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/elbrit-logo-fit.webp" alt="Logo" style={{width: '280px', height: '80px'}} />
      </div>
    </header>
  );
};

export default Header;
