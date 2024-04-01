export const checkWin = (correctLetters, wrongLetters, word) => {
  let status = "win";

  word.split("").forEach((el) => {
    if (!correctLetters.includes(el)) {
      status = "";
    }
    if (wrongLetters.length === 6) status = "lose";
  });
  const lose = new Audio("../src/Tunes/lose.wav");
  const win = new Audio("../src/Tunes/win.mp3");
  if (status === "win") win.play();
  else if (status === "lose") lose.play();
  return status;
};

export const reset = (setCorrectLetters, setWrongLetters, setPlayable) => {
  console.log("reset");
  setCorrectLetters([]);
  setWrongLetters([]);
  setPlayable(true);
};
