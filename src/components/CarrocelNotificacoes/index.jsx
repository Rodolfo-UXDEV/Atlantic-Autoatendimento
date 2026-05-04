import React from 'react';
import { TriangleAlert, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './styles.module.css';

export default function CarrocelNotificacoes({ property1 = "Default" }) {
  const isVariant2 = property1 === "Variant2";
  
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${isVariant2 ? styles.cardError : styles.cardWarning}`}>
        <div className={styles.content}>
          <div className={`${styles.iconContainer} ${isVariant2 ? styles.iconError : styles.iconWarning}`}>
            <TriangleAlert size={32} color={isVariant2 ? "#DC3545" : "#FEC42D"} />
          </div>
          <div className={styles.textContent}>
            <p className={`${styles.title} ${isVariant2 ? styles.titleError : styles.titleWarning}`}>
              {isVariant2 ? "Atenção!" : "Importante!"}
            </p>
            <div className={styles.description}>
              <p>{isVariant2 ? "O período de recadastramento já começou, evite complicações" : "Você tem 2 ocorrências de ausências para justificar."}</p>
              <p>{isVariant2 ? "no seu cadastro, clique no botão ao lado e regularize!" : "Clique no botão ao lado e justifique agora!"}</p>
            </div>
          </div>
        </div>
        <button className={`${styles.actionButton} ${isVariant2 ? styles.btnError : styles.btnWarning}`}>
          {isVariant2 ? "Ir para o recadastramento" : "Justificar"}
        </button>
      </div>

      {/* Pagination / Controls */}
      <div className={styles.controls}>
        <button className={styles.controlButton}>
          <ChevronLeft size={20} />
        </button>
        <div className={`${styles.dot} ${styles.dotActive}`}></div>
        <div className={styles.dot}></div>
        <button className={styles.controlButton}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
