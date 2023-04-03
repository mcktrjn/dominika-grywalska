import ReactMarkdown from "react-markdown";
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
  const loremIpsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n
  Ut enim ad minim veniam, quis nostrud exercitation ullamco **laboris nisi**  \n ut aliquip ex ea commodo consequat.
  `;

  return (
    <Section className={styles.section}>
      <Container>
        <div>
          <Typography tag="p" weight={400} color="success300">
            Lorem ipsum
          </Typography>

          <Typography tag="h1" isFamilySerif weight={600}>
            Lorem ipsum dolor{" "}
            <Typography.Decoration
              color="success300"
              decoration="underline"
              decorationColor="success100"
            >
              sit amet
            </Typography.Decoration>
          </Typography>

          <span>
            <ReactMarkdown>{loremIpsum}</ReactMarkdown>
          </span>

          <div>
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
        <div>
          <img src="" alt="" />
          <Pattern />
        </div>
      </Container>
    </Section>
  );
};
