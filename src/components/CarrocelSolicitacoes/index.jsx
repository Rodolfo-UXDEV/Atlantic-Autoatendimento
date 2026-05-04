import React, { useState } from 'react';
import { Search, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './styles.module.css';

export default function CarrocelSolicitacoes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const solicitacoes = [
    {
      id: 0,
      protocolo: "0080001876",
      status: "TRAMITADO",
      nome: "NOMEAÇÃO",
      processo: "0080001876",
      data: "18/07/2023"
    },
    {
      id: 1,
      protocolo: "0080001020",
      status: "EM PROCESSO",
      nome: "RECADASTRAMENTO",
      processo: "0050002345",
      data: "06/05/2023"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? solicitacoes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === solicitacoes.length - 1 ? 0 : prev + 1));
  };

  const currentSolicitacao = solicitacoes[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          
          <div className={styles.dataGrid}>
            <div className={styles.column}>
              <div className={styles.field}>
                <span className={styles.label}>Protocolo:</span>
                <span className={styles.value}>{currentSolicitacao.protocolo}</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Status do processo:</span>
                <span className={styles.value}>{currentSolicitacao.status}</span>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.field}>
                <span className={styles.label}>Nome do processo:</span>
                <span className={styles.value}>{currentSolicitacao.nome}</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Processo:</span>
                <span className={styles.value}>{currentSolicitacao.processo}</span>
              </div>
            </div>

            <div className={styles.columnSingle}>
              <div className={styles.field}>
                <span className={styles.label}>Data de abertura:</span>
                <span className={styles.value}>{currentSolicitacao.data}</span>
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.actions}>
            <button className={`${styles.actionButton} ${styles.btnView}`}>
              Ver solicitação
              <Search size={16} strokeWidth={3} />
            </button>
            <button className={`${styles.actionButton} ${styles.btnDelete}`}>
              Excluir solicitação
              <XCircle size={16} strokeWidth={2} />
            </button>
          </div>

        </div>
      </div>

      {/* Pagination / Controls */}
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={handlePrev}>
          <ChevronLeft size={20} />
        </button>
        {solicitacoes.map((_, index) => (
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
