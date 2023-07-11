import { useContext } from "react";
import { Context } from "../../App";
import { Container, Section, Typography } from "../../components";
import styles from "./WorkInProgress.module.scss";

type Props = {
  index: number;
};

export const WorkInProgress: React.FC<Props> = ({ index }) => {
  const { sectionsVisibility, texts } = useContext(Context);

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <Typography
          isVisible={sectionsVisibility[index]}
          variant="h2"
          weight={600}
          decorationColor="primary40"
          decorationTextColor="neutral99"
          decorationRange={[0, 1]}
          text={texts.workInProgress}
        />
      </Container>
    </Section>
  );
};
