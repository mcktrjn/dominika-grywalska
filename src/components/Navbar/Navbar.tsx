import cx from "classnames";
import { useScrollPosition, useWindowSize } from "../../hooks";
import styles from "./Navbar.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Navbar: React.FC<Props> = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollIndicator = scrollPosition / (scrollHeight - windowHeight);

  const componentClassName = cx(styles.navbar, {
    [styles.visible]: scrollPosition > 0, // TODO: check if this className is needed
  });

  return (
    <div className={componentClassName}>
      {children}
      <div
        className={styles.scrollIndicator}
        style={{ transform: `scaleX(${scrollIndicator})` }}
      />
    </div>
  );
};
