import { generate } from "random-words";
export const checkWin = (correctLetters, wrongLetters, word) => {
  let status = "win";
  const lose = new Audio("../src/Tunes/lose.wav");
  const win = new Audio("../src/Tunes/win.mp3");
  word.split("").forEach((el) => {
    if (!correctLetters.includes(el)) {
      status = "";
    }
    if (wrongLetters.length === 6) {
      status = "lose";
      lose.play();
    }
  });

  if (status === "win") win.play();
  return status;
};

export const reset = (
  setCorrectLetters,
  setWrongLetters,
  setPlayable,
  setSelectedWord
) => {
  setCorrectLetters([]);
  setWrongLetters([]);
  setPlayable(true);
  setSelectedWord(generate(1)[0]);
};

export const resetBtn = (setScore) => {
  setScore(0);
};
