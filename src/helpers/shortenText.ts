const checkIfSpecialCharacter = (character: string) => {
  return /^[^\w\s]$/.test(character);
};

export const shortenText = (text: string, length: number) => {
  const words = text.split(" ");
  let shortenedText = "";
  let lastWord = "";

  for (let i = 0; i < words.length; i++) {
    if (shortenedText.length + words[i].length <= length) {
      shortenedText += words[i] + " ";
      lastWord = words[i];
    } else {
      shortenedText = shortenedText.trim();
      break;
    }
  }

  const lastCharacter = lastWord.slice(-1);

  return checkIfSpecialCharacter(lastCharacter)
    ? `${shortenedText.slice(0, -1)}...`
    : `${shortenedText}...`;
};
