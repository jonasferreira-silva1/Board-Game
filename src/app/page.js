// src/app/page.js
import Board from './components/Board'; // Caminho corrigido
import styles from './styles/globals.css';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Jogo de Tabuleiro</h1>
      <Board />
    </div>
  );
}