import {
  Button,
  Container,
  Emoji,
  Pattern,
  Section,
  Typography,
} from "../../components";
import styles from "./Hero.module.scss";

export const Hero = () => {
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

          <Typography tag="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
            <b>laboris nisi</b> ut aliquip ex ea commodo consequat.
          </Typography>

          <div>
            <Button
              icon={
                <Emoji
                  src={require("../../emojis/grinningFaceWithBigEyes.png")}
                  alt="Grinning face with big eyes emoji"
                />
              }
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
