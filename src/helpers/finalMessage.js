export const finalMessage  = (correctLength, wrongLength, word) => {
  if (correctLength === word.length) return true;
  else if(wrongLength === 6) return false;
};
