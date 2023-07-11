import { useContext } from "react";
import { Context } from "../../App";
import {
  Card,
  Container,
  Markdown,
  Section,
  Typography,
} from "../../components";
import { heading, imageAlt, imageSrc, paragraph, text } from "../../constants";
import styles from "./Article.module.scss";

export const Article = () => {
  const { texts } = useContext(Context);

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <Card
          size="large"
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imagePosition={[50, 75]}
          author="Dominika Grywalska"
          date="18 Apr 2023"
          heading={heading}
          paragraph={paragraph}
          // paragraphLength={9999}
          chips={["01", "Consectetur", "Adipiscing"]}
          decorationRange={[3, 4]}
        />
        <article>
          <Markdown text={text} />
        </article>
        <aside>
          <Typography
            variant="p"
            weight={600}
            color="neutral10"
            text={texts.inThisArticle}
          />
          <Typography
            isVisible
            variant="h4"
            weight={600}
            decorationColor="primary40"
            decorationTextColor="neutral99"
            decorationRange={[0, 1]}
            text={texts.workInProgress}
          />
        </aside>
      </Container>
    </Section>
  );
};
