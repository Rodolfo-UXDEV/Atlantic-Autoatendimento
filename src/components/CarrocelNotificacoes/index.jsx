import React, { useState } from 'react';
import { TriangleAlert, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './styles.module.css';

export default function CarrocelNotificacoes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const notifications = [
    {
      id: 0,
      type: "Warning",
      title: "Importante!",
      desc1: "Você tem 2 ocorrências de ausências para justificar.",
      desc2: "Clique no botão ao lado e justifique agora!",
      btnText: "Justificar"
    },
    {
      id: 1,
      type: "Error",
      title: "Atenção!",
      desc1: "O período de recadastramento já começou, evite complicações",
      desc2: "no seu cadastro, clique no botão ao lado e regularize!",
      btnText: "Ir para o recadastramento"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? notifications.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === notifications.length - 1 ? 0 : prev + 1));
  };

  const currentNotification = notifications[currentIndex];
  const isVariant2 = currentNotification.type === "Error";

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${isVariant2 ? styles.cardError : styles.cardWarning}`}>
        <div className={styles.content}>
          <div className={`${styles.iconContainer} ${isVariant2 ? styles.iconError : styles.iconWarning}`}>
            <TriangleAlert size={32} color={isVariant2 ? "#DC3545" : "#FEC42D"} />
          </div>
          <div className={styles.textContent}>
            <p className={`${styles.title} ${isVariant2 ? styles.titleError : styles.titleWarning}`}>
              {currentNotification.title}
            </p>
            <div className={styles.description}>
              <p>{currentNotification.desc1}</p>
              <p>{currentNotification.desc2}</p>
            </div>
          </div>
        </div>
        <button className={`${styles.actionButton} ${isVariant2 ? styles.btnError : styles.btnWarning}`}>
          {currentNotification.btnText}
        </button>
      </div>

      {/* Pagination / Controls */}
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={handlePrev}>
          <ChevronLeft size={20} />
        </button>
        {notifications.map((_, index) => (
          <div 
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ''}`}
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: 'pointer' }}
          ></div>
        ))}
        <button className={styles.controlButton} onClick={handleNext}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
