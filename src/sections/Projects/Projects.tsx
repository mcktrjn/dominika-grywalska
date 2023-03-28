import { Container, Section, Typography } from "../../components";
import styles from "./Projects.module.scss";

export const Projects = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <Typography tag="p" weight={400}>
          Projects
        </Typography>
      </Container>
    </Section>
  );
};
