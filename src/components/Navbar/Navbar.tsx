import cx from "classnames";
import { useEffect, useState } from "react";
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
    }, 1000);
  }, []);

  const componentClassName = cx(
    styles.navbar
    // { [styles.visible]: scrollPosition > 0 } // TODO: check if "visible" className is needed
  );

  return (
    <div className={componentClassName}>
      {children}
      <div
        className={cx(styles.scrollIndicator, {
          [styles.animation]: isAnimationPlaying,
        })}
        style={{ transform: `scaleX(${scrollIndicator})` }}
      />
    </div>
  );
};
