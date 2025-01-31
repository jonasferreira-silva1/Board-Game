// src/app/components/Board.js
"use client"; // Indica que este é um componente do lado do cliente

import React, { useState, useEffect } from "react";
import "../styles/Board.css";

const Tabuleiro = () => {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null)); // Tabuleiro 3x3
  const [ehVezDoX, setEhVezDoX] = useState(true); // Controla de quem é a vez
  const [vencedor, setVencedor] = useState(null); // Armazena o vencedor
  const [contadorJogadas, setContadorJogadas] = useState(0); // Contador de jogadas
  const [vitoriasUsuario, setVitoriasUsuario] = useState(0); // Contador de vitórias do usuário

  // Função para calcular o vencedor
  const calcularVencedor = (quadrados) => {
    const combinacoesVitoria = [
      [0, 1, 2], // Linhas
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Colunas
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonais
      [2, 4, 6],
    ];

    for (let combinacao of combinacoesVitoria) {
      const [a, b, c] = combinacao;
      if (
        quadrados[a] &&
        quadrados[a] === quadrados[b] &&
        quadrados[a] === quadrados[c]
      ) {
        return quadrados[a]; // Retorna o vencedor ("X" ou "O")
      }
    }
    return null; // Nenhum vencedor
  };

  // Função para lidar com o clique do jogador humano
  const lidarComClique = (indice) => {
    if (tabuleiro[indice] || vencedor) {
      return; // Não faz nada se a célula já estiver preenchida ou se houver um vencedor
    }

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indice] = "X"; // Jogador humano sempre joga com "X"
    setTabuleiro(novoTabuleiro);
    setContadorJogadas(contadorJogadas + 1); // Incrementa o contador de jogadas

    const novoVencedor = calcularVencedor(novoTabuleiro);
    if (novoVencedor) {
      setVencedor(novoVencedor);
    } else {
      setEhVezDoX(false); // Passa a vez para o computador
    }
  };

  // Função para o computador fazer uma jogada
  const fazerJogadaComputador = (tabuleiro) => {
    const jogadasDisponiveis = tabuleiro
      .map((celula, indice) => (celula === null ? indice : null))
      .filter((indice) => indice !== null);

    // Verifica se o computador pode vencer na próxima jogada
    for (let jogada of jogadasDisponiveis) {
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[jogada] = "O";
      if (calcularVencedor(novoTabuleiro) === "O") {
        return jogada;
      }
    }

    // Verifica se o usuário pode vencer na próxima jogada e bloqueia
    for (let jogada of jogadasDisponiveis) {
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[jogada] = "X";
      if (calcularVencedor(novoTabuleiro) === "X") {
        // Permite que o usuário ganhe uma vez a cada duas jogadas
        if (vitoriasUsuario % 2 === 0) {
          return jogada;
        } else {
          // Bloqueia a jogada do usuário
          const jogadaBloqueio = jogadasDisponiveis.find(
            (indice) => indice !== jogada
          );
          return jogadaBloqueio !== undefined ? jogadaBloqueio : jogada;
        }
      }
    }

    // Escolhe uma jogada aleatória
    return jogadasDisponiveis[
      Math.floor(Math.random() * jogadasDisponiveis.length)
    ];
  };

  // Efeito para o computador fazer uma jogada
  useEffect(() => {
    if (!ehVezDoX && !vencedor) {
      const jogadaComputador = fazerJogadaComputador(tabuleiro);
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[jogadaComputador] = "O"; // Computador joga com "O"
      setTabuleiro(novoTabuleiro);
      setContadorJogadas(contadorJogadas + 1); // Incrementa o contador de jogadas

      const novoVencedor = calcularVencedor(novoTabuleiro);
      if (novoVencedor) {
        setVencedor(novoVencedor);
      } else {
        setEhVezDoX(true); // Passa a vez para o jogador humano
      }
    }
  }, [tabuleiro, ehVezDoX, vencedor]);

  // Atualiza o contador de vitórias do usuário
  useEffect(() => {
    if (vencedor === "X") {
      setVitoriasUsuario((prev) => prev + 1);
    }
  }, [vencedor]);

  // Função para reiniciar o jogo
  const reiniciarJogo = () => {
    setTabuleiro(Array(9).fill(null));
    setVencedor(null);
    setEhVezDoX(true);
    setContadorJogadas(0);
  };

  // Mensagem de status do jogo
  const status = vencedor
    ? `Vencedor: ${vencedor}`
    : tabuleiro.every((celula) => celula !== null)
    ? "Empate!"
    : `Próximo jogador: ${ehVezDoX ? "X (Você)" : "O (Computador)"}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
        {tabuleiro.map((celula, indice) => (
          <div
            key={indice}
            className="cell"
            onClick={() => lidarComClique(indice)}
          >
            {celula}
          </div>
        ))}
      </div>
      {(vencedor || tabuleiro.every((celula) => celula !== null)) && (
        <button className="reset-button" onClick={reiniciarJogo}>
          Reiniciar Jogo
        </button>
      )}
    </div>
  );
};

export default Tabuleiro;
