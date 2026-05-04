import React from 'react';
import { Bell, LogOut } from 'lucide-react';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoPlaceholder}>
          {/* Espaço para a logo da ALESP */}
          Logo ALESP
        </div>

        <div className={styles.userInfoWrapper}>
          <div className={styles.userInfo}>
            <p className={styles.userName}>João Fernando de Carvalho Vieira</p>
            <p className={styles.userId}>Usuário: 22022553896</p>
          </div>
          
          <div className={styles.divider}></div>

          <button className={styles.notificationBtn}>
            <Bell size={24} color="#FFFFFF" />
            <span className={styles.notificationDot}></span>
          </button>

          <div className={styles.divider}></div>

          <button className={styles.logoutBtn}>
            <span className={styles.logoutText}>Sair</span>
            <LogOut size={20} color="#FFFFFF" />
          </button>
        </div>
      </div>
    </header>
  );
}
