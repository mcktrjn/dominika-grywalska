import cx from "classnames";
import { useEffect, useState } from "react";
import { Container } from "../../components";
import { navbarHeight } from "../../constants";
import { useScrollPosition, useWindowSize } from "../../hooks";
import styles from "./Navbar.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Navbar: React.FC<Props> = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const scrollHeight = document.body.scrollHeight + navbarHeight;
  const scrollIndicator = scrollPosition / (scrollHeight - windowHeight) || 0;

  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimationPlaying(false);
    }, 1500); // TODO: find out why "1500" instead of "1000"
  }, []);

  return (
    <div className={styles.navbar}>
      <Container size="large">{children}</Container>
      <div
        className={cx(styles.scrollIndicator, {
          [styles.animation]: isAnimationPlaying,
        })}
        style={{ transform: `scaleX(${scrollIndicator})` }}
      />
    </div>
  );
};
