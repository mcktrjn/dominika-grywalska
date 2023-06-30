import { useContext } from "react";
import { Context } from "../../App";
import { Container, Section, Typography } from "../../components";
import styles from "./Test.module.scss";

export const Test = () => {
  const { texts } = useContext(Context);

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <Typography
          isVisible
          variant="h2"
          weight={600}
          decorationColor="primary40"
          decorationTextColor="neutral99"
          decorationRange={[0, 2]}
          text={texts.test.workInProgress}
        />
      </Container>
    </Section>
  );
};
