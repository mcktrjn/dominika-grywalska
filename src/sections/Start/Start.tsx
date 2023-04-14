import cx from "classnames";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Context } from "../../App";
import {
  Button,
  Container,
  // Emoji,
  Pattern,
  Section,
  Typography,
} from "../../components";
import styles from "./Start.module.scss";

export const Start = () => {
  const { isSectionVisible } = useContext(Context);

  const heading = ["Lorem", "ipsum", "dolor", "sit", "amet"];
  const paragraph = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n
  Ut enim ad minim veniam, quis nostrud exercitation ullamco **laboris nisi**  \n ut aliquip ex ea commodo consequat.
  `;

  return (
    <Section
      className={cx(styles.section, { [styles.visible]: isSectionVisible[0] })}
    >
      <Container className={styles.container}>
        <div className={styles.textContainer}>
          <Typography tag="p" weight={400} color="success300">
            Lorem ipsum
          </Typography>

          <Typography
            className={styles.heading}
            tag="h1"
            isFamilySerif
            weight={600}
          >
            {heading.slice(0, 3).map((word, index) => (
              <span key={index} className={styles.wordWrapper}>
                <span>{word} </span>
              </span>
            ))}
            {heading.slice(3, 5).map((word, index) => (
              <span key={index} className={styles.wordWrapper}>
                <Typography.Decoration decoration="underline">
                  {word}
                </Typography.Decoration>
              </span>
            ))}
          </Typography>

          <span className={styles.paragraphWrapper}>
            <ReactMarkdown>{paragraph}</ReactMarkdown>
          </span>

          <div className={styles.buttonContainer}>
            <Button
            // icon={
            //   <Emoji
            //     src={require("../../emojis/grinningFaceWithBigEyes.png")}
            //     alt="Grinning face with big eyes emoji"
            //   />
            // }
            >
              Lorem ipsum
            </Button>

            {/* <Typography tag="p" weight={400} color="neutral900">
              <u>Lorem ipsum</u>
            </Typography> */}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1664575600397-88e370cb46b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              alt="Woman working"
            />
            <Pattern />
          </div>
        </div>
      </Container>
    </Section>
  );
};
