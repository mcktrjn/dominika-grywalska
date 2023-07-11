import cx from "classnames";
import styles from "./Section.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Section: React.FC<Props> = ({ className, children }) => {
  const componentClassName = cx(styles.section, className);

  return <section className={componentClassName}>{children}</section>;
};
