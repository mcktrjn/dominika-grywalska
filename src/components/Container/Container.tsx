import cx from "classnames";
import styles from "./Container.module.scss";

type Props = {
  size?: "large" | "medium" | "small";
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ size = "medium", children }) => {
  const componentClassName = cx(styles.container, styles[`size-${size}`]);

  return <div className={componentClassName}>{children}</div>;
};
