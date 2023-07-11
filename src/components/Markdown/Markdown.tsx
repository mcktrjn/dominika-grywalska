import cx from "classnames";
import ReactMarkdown from "react-markdown";
import { expressions, spaces } from "../../constants";
import { Expression } from "../../types";
import styles from "./Markdown.module.scss";

const testString = (expression: string, character: string) => {
  const regex = new RegExp(expression);
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
  const words = text.split(" ").filter((word) => word !== "");
  let modifiedText = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordWithoutUnderscores = word.replace(/_/g, "");
    const wordLastCharacter = word.slice(-1);
    const previousWordLastCharacter = words[i - 1]
      ? words[i - 1].slice(-1)
      : "";
    const nextWordLastCharacter = words[i + 1] ? words[i + 1].slice(-1) : "";

    if ((modifiedText + word).length <= length) {
      if (
        (wordWithoutUnderscores.length <= 2 && testString("[^#>-]", wordLastCharacter)) ||
        (testString("[,.!?]", previousWordLastCharacter) && testString("[^#>-]", wordLastCharacter)) ||
        testString("[.!?]", nextWordLastCharacter) // prettier-ignore
      ) {
        modifiedText += word + spaces.NBSP;
      } else {
        modifiedText += word + " ";
      }
    } else {
      modifiedText = modifiedText.trim();
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

  return testString("[^\\w#>-]", modifiedTextLastCharacter)
    ? `${modifiedText.slice(0, -1)}...`
    : `${modifiedText}...`;
};

type Props = {
  className?: string;
  text: string;
  length?: number;
};

export const Markdown: React.FC<Props> = ({ className, text, length }) => {
  const componentClassName = cx(styles.markdown, className);

  return (
    <div className={componentClassName}>
      <ReactMarkdown>{modifyText(text, length)}</ReactMarkdown>
    </div>
  );
};
