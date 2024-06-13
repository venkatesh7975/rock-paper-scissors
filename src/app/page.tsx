"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const array = ["Rock", "Paper", "Scissor"];

  const playGame = (playerChoice:any) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const computerChoice = array[randomIndex];

    if (
      (playerChoice === "Rock" && computerChoice === "Scissor") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
      setPlayerScore(playerScore + 1);
      alert(`You chose ${playerChoice}, Computer chose ${computerChoice}. You won!`);
    } else if (playerChoice === computerChoice) {
      alert(`You chose ${playerChoice}, Computer chose ${computerChoice}. It's a draw!`);
    } else {
      setComputerScore(computerScore + 1);
      alert(`You chose ${playerChoice}, Computer chose ${computerChoice}. You lost!`);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>ROCK PAPER SCISSORS</h1>
      </div>
      <div className={styles.scores}>
        <div className={styles.score}>Player Score: {playerScore}</div>
        <div className={styles.score}>Computer Score: {computerScore}</div>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => playGame("Rock")}>
          Rock
          <img src="/rock.jpg" alt="rock" height="50" width="50" />
        </button>
        <button className={styles.button} onClick={() => playGame("Paper")}>
          Paper
          <img src="/paper.jpg" alt="paper" height="50" width="50" />
        </button>
        <button className={styles.button} onClick={() => playGame("Scissor")}>
          Scissor
          <img src="/scissor.jpg" alt="scissor" height="50" width="50" />
        </button>
      </div>
    </main>
  );
}
