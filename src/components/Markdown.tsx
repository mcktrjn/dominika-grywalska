import ReactMarkdown from "react-markdown";
import { expressions, spaces } from "../constants";
import { Expression } from "../types";

const testString = (/* expression: string, */ character: string) => {
  const regex = new RegExp("[^\\w]");
  return regex.test(character);
};

const matchString = (
  text: string,
  character: Expression["character"],
  quantifier: Expression["quantifier"]
) => {
  const expression = `(^|[^${character}])${character}{${quantifier}}([^${character}]|$)`; // (^|[^_])_{1}([^_]|$)
  const regex = new RegExp(expression, "g");
  return text.match(regex);
};

const modifyText = (text: string, length = 9999) => {
  const words = text.split(" ");
  let modifiedText = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordWithoutUnderscores = word.replace(/_/g, "");
    const firstWord = words[0];
    const secondWord = words[1];
    const previousWord = words[i - 1] ? words[i - 1] : "";
    const previousWordLastCharacter = previousWord.slice(-1);
    const nextWord = words[i + 1] ? words[i + 1] : "";

    if (
      (modifiedText + word + " " + nextWord).length <= length &&
      i !== words.length - 1
    ) {
      if (
        wordWithoutUnderscores.length <= 2 ||
        testString(previousWordLastCharacter)
      ) {
        modifiedText += word + spaces.NBSP;
      } else {
        modifiedText += word + " ";
      }
    } else if ((firstWord + " " + secondWord).length > length) {
      modifiedText = firstWord;
      break;
    } else {
      modifiedText = modifiedText.trim() + spaces.NBSP + word;
      break;
    }
  }

  if (text.length <= length) return modifiedText;

  for (let i = 0; i < expressions.length; i++) {
    const { character, quantifier, string } = expressions[i];
    const matches = matchString(modifiedText, character, quantifier);
    const isMatchesNumberEven = matches ? matches.length % 2 === 0 : true;
    if (!isMatchesNumberEven) modifiedText += string;
  }

  const modifiedTextLastCharacter = modifiedText.slice(-1);

  return testString(modifiedTextLastCharacter)
    ? `${modifiedText.slice(0, -1)}...`
    : `${modifiedText}...`;
};

type Props = {
  text: string;
  length?: number;
};

export const Markdown: React.FC<Props> = ({ text, length }) => {
  return <ReactMarkdown>{modifyText(text, length)}</ReactMarkdown>;
};
