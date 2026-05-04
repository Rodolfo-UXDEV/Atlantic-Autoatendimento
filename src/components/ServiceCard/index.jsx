import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import styles from './styles.module.css';

export default function ServiceCard({ icon: Icon, title }) {
  return (
    <button className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={24} color="#262454" />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <ArrowRightCircle size={20} color="#262454" className={styles.arrow} />
      </div>
    </button>
  );
}
