import React from 'react';
import CarrocelNotificacoes from './components/CarrocelNotificacoes';
import CarrocelSolicitacoes from './components/CarrocelSolicitacoes';

function App() {
  return (
    <main style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
      <h1>Componentes: Atlantic - Autoatendimento</h1>
      
      <section>
        <h2>1. Carrossel de Notificações</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <CarrocelNotificacoes property1="Default" />
          <CarrocelNotificacoes property1="Variant2" />
        </div>
      </section>

      <section>
        <h2>2. Carrossel de Solicitações</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <CarrocelSolicitacoes property1="Default" />
          <CarrocelSolicitacoes property1="Variant2" />
        </div>
      </section>
    </main>
  );
}

export default App;
