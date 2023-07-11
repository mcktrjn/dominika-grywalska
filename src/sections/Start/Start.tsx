import cx from "classnames";
import { useContext } from "react";
import { Context } from "../../App";
import {
  Button,
  Container,
  Markdown,
  Pattern,
  Section,
  Typography,
} from "../../components";
import { heading, paragraph } from "../../constants";
import styles from "./Start.module.scss";

export const Start = () => {
  const { sectionsVisibility } = useContext(Context);

  return (
    <Section
      className={cx(styles.section, {
        [styles.visible]: sectionsVisibility[0],
      })}
    >
      <Container className={styles.container}>
        <div className={styles.textBox}>
          <Typography
            variant="p"
            weight={400}
            color="primary40"
            text="Lorem ipsum"
          />
          <Typography
            isVisible={sectionsVisibility[0]}
            variant="h1"
            isFamilyPlayfairDisplay
            weight={600}
            decorationRange={[3, 4]}
            text={heading}
          />
          <Markdown className={styles.markdown} text={paragraph} length={240} />
          <Button text="Lorem ipsum" />
        </div>
        <div className={styles.imageBox}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1597756900506-34d40254dea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
              alt=""
            />
            <Pattern />
          </div>
        </div>
      </Container>
    </Section>
  );
};
