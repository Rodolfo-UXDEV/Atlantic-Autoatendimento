import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.text}>Alesp 2024</span>
        <span className={styles.registered}>®</span>
      </div>
    </footer>
  );
}
