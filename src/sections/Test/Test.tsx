import { Container, Section, Typography } from "../../components";
import styles from "./Test.module.scss";

export const Test = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <Typography tag="p" weight={400}>
          Test
        </Typography>
      </Container>
    </Section>
  );
};
