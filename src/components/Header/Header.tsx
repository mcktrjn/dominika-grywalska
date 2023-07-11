import cx from "classnames";
import { useEffect, useState } from "react";
import { Container } from "../../components";
import { headerHeight } from "../../constants";
import { useScrollPosition, useWindowSize } from "../../hooks";
import styles from "./Header.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const scrollHeight = document.body.scrollHeight + headerHeight;
  const scrollIndicator = scrollPosition / (scrollHeight - windowHeight) || 0;

  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimationPlaying(false);
    }, 1500); // TODO: find out why "1500" instead of "1000"
  }, []);

  return (
    <header className={styles.header}>
      <Container size="large">{children}</Container>
      <div
        className={cx(styles.scrollIndicator, {
          [styles.animation]: isAnimationPlaying,
        })}
        style={{ transform: `scaleX(${scrollIndicator})` }}
      />
    </header>
  );
};
