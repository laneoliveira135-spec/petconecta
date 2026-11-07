
import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="container">
    <div class="eyebrow">PROJETO INTEGRADOR EXTENSIONISTA II · ADS</div>
    <section class="hero">
      <div class="symbol" aria-hidden="true">🐾</div>
      <h1>PetConecta</h1>
      <p class="subtitle">Conectando solidariedade ao cuidado animal.</p>
      <p class="description">Sistema de gerenciamento de doações para uma ONG fictícia dedicada ao resgate e cuidado de cães e gatos.</p>
      <div class="status-card" role="status" aria-live="polite">
        <div class="status-heading">Conexão com o servidor</div>
        <p>Status da API: <strong id="status">verificando...</strong></p>
        <p class="time" id="hora">Aguardando data e hora...</p>
      </div>
      <p class="footnote">Atividade 1 · Integração Vite+ e API Express</p>
    </section>
  </main>
`;

async function verificarApi() {
  const status = document.querySelector('#status');
  const hora = document.querySelector('#hora');

  try {
    const resposta = await fetch('/api/health', {
      cache: 'no-store'
    });

    if (!resposta.ok) {
      throw new Error('Resposta HTTP inválida');
    }

    const dados = await resposta.json();
    status.textContent = dados.status;

    const dataHora = new Date(dados.hora);

    if (Number.isNaN(dataHora.getTime())) {
      throw new Error('Data e hora inválidas');
    }

    const dataFormatada = dataHora.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    });

    const horaFormatada = dataHora.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    });

    hora.textContent = `Data: ${dataFormatada} | Hora: ${horaFormatada}`;

  } catch (erro) {
    console.error('Erro ao consultar a API:', erro);
    status.textContent = 'API fora do ar';
    hora.textContent = 'Não foi possível obter a data e a hora.';
  }
}

verificarApi();
