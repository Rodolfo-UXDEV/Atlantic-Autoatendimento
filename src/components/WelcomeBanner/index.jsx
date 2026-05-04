import React from 'react';
import styles from './styles.module.css';

export default function WelcomeBanner({ userName }) {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Olá {userName}!</h1>
          <p className={styles.subtitle}>
            Bem vindo ao autoatendimento da <strong>Alesp</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
