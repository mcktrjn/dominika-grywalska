import { useContext } from "react";
import { Context } from "../../App";
import {
  Card,
  Chip,
  Container,
  Markdown,
  Section,
  Typography,
} from "../../components";
import { heading, imageAlt, imageSrc, paragraph } from "../../constants";
import styles from "./Projects.module.scss";

export const Projects = () => {
  const { sectionsVisibility } = useContext(Context);

  return (
    <Section className={styles.section}>
      <Container className={styles.container} size="small">
        <div className={styles.textBox}>
          <Typography
            isVisible={sectionsVisibility[2]}
            variant="h2"
            isFamilyPlayfairDisplay
            weight={600}
            decoration="underline"
            decorationRange={[3, 4]}
            text={heading}
          />
          <Markdown text={paragraph} length={240} />
          <div>
            <Chip size="large" text="Consectetur" />
            <Chip size="large" text="Adipiscing" />
          </div>
        </div>
        <Card
          size="large"
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imagePosition={[50, 75]}
          author="Dominika Grywalska"
          date="18 Apr 2023"
          heading={heading}
          icon="northEast"
          paragraph={paragraph}
          chips={["01", "Consectetur", "Adipiscing"]}
          decorationRange={[3, 4]}
        />
        <Card
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imagePosition={[50, 75]}
          author="Dominika Grywalska"
          date="18 Apr 2023"
          heading={heading}
          icon="northEast"
          paragraph={paragraph}
          chips={["02", "Consectetur", "Adipiscing"]}
          decorationRange={[3, 4]}
        />
        <Card
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imagePosition={[50, 75]}
          author="Dominika Grywalska"
          date="18 Apr 2023"
          heading={heading}
          icon="northEast"
          paragraph={paragraph}
          chips={["03", "Consectetur", "Adipiscing"]}
          decorationRange={[3, 4]}
        />
        <Card
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imagePosition={[50, 75]}
          author="Dominika Grywalska"
          date="18 Apr 2023"
          heading={heading}
          icon="northEast"
          paragraph={paragraph}
          chips={["04", "Consectetur", "Adipiscing"]}
          decorationRange={[3, 4]}
        />
        <Card
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imagePosition={[50, 75]}
          author="Dominika Grywalska"
          date="18 Apr 2023"
          heading={heading}
          icon="northEast"
          paragraph={paragraph}
          chips={["05", "Consectetur", "Adipiscing"]}
          decorationRange={[3, 4]}
        />
      </Container>
    </Section>
  );
};
