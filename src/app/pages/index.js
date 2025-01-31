// src/app/pages/index.js
import Board from "../components/Board";
import "../styles/Board.css";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Jogo da Velha</h1>
      <Board />
    </div>
  );
}
