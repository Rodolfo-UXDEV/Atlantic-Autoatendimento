import React from 'react';
import { 
  TriangleAlert, 
  List, 
  Wrench, 
  Coins, 
  FileText, 
  LifeBuoy, 
  WalletCards, 
  Utensils, 
  FileEdit, 
  CalendarDays, 
  Clock, 
  GraduationCap, 
  CheckSquare 
} from 'lucide-react';

import Header from './components/Header';
import WelcomeBanner from './components/WelcomeBanner';
import CarrocelNotificacoes from './components/CarrocelNotificacoes';
import CarrocelSolicitacoes from './components/CarrocelSolicitacoes';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';

import styles from './App.module.css';

const services = [
  { title: "Recadastramento do Servidor", icon: Coins },
  { title: "Atualização Cadastral", icon: Coins },
  { title: "Minhas solicitações", icon: List },
  { title: "Pedido Exoneração", icon: FileText },
  { title: "Frequência e Férias", icon: LifeBuoy },
  { title: "Aposentadoria e Abono Permanência", icon: WalletCards },
  { title: "Informe Contagem Tempo", icon: Coins },
  { title: "Vale-refeição", icon: Utensils },
  { title: "Iniciar Solicitação", icon: FileEdit },
  { title: "Regularizar Frequência", icon: CalendarDays },
  { title: "Folha de Ponto", icon: Clock },
  { title: "Horário Especial de Estudante", icon: GraduationCap },
  { title: "Crédito Eleitoral", icon: CheckSquare },
];

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      
      <main className={styles.mainContent}>
        <WelcomeBanner userName="João" />

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <TriangleAlert size={24} color="#262454" />
            <div className={styles.sectionDivider}></div>
            <h2 className={styles.sectionTitle}>Notificações</h2>
          </div>
          <CarrocelNotificacoes property1="Default" />
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <List size={24} color="#262454" />
            <div className={styles.sectionDivider}></div>
            <h2 className={styles.sectionTitle}>Solicitações em andamento</h2>
          </div>
          <CarrocelSolicitacoes property1="Default" />
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Wrench size={24} color="#262454" />
            <div className={styles.sectionDivider}></div>
            <h2 className={styles.sectionTitle}>Serviços</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                icon={service.icon} 
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
