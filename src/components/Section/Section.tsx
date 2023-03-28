import cx from "classnames";
import styles from "./Section.module.scss"; // TODO: check if this file is needed

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Section: React.FC<Props> = ({ className, children }) => {
  const componentClassName = cx(styles.section, className);

  return <div className={componentClassName}>{children}</div>;
};
