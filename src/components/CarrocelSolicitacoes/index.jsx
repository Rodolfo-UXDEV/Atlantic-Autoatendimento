import React from 'react';
import { Search, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './styles.module.css';

export default function CarrocelSolicitacoes({ property1 = "Default" }) {
  const isVariant2 = property1 === "Variant2";

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          
          <div className={styles.dataGrid}>
            <div className={styles.column}>
              <div className={styles.field}>
                <span className={styles.label}>Protocolo:</span>
                <span className={styles.value}>{isVariant2 ? "0080001020" : "0080001876"}</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Status do processo:</span>
                <span className={styles.value}>{isVariant2 ? "EM PROCESSO" : "TRAMITADO"}</span>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.field}>
                <span className={styles.label}>Nome do processo:</span>
                <span className={styles.value}>{isVariant2 ? "RECADASTRAMENTO" : "NOMEAÇÃO"}</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Processo:</span>
                <span className={styles.value}>{isVariant2 ? "0050002345" : "0080001876"}</span>
              </div>
            </div>

            <div className={styles.columnSingle}>
              <div className={styles.field}>
                <span className={styles.label}>Data de abertura:</span>
                <span className={styles.value}>{isVariant2 ? "06/05/2023" : "18/07/2023"}</span>
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
        <button className={styles.controlButton}>
          <ChevronLeft size={20} />
        </button>
        <div className={`${styles.dot} ${isVariant2 ? '' : styles.dotActive}`}></div>
        <div className={`${styles.dot} ${isVariant2 ? styles.dotActive : ''}`}></div>
        <button className={styles.controlButton}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
