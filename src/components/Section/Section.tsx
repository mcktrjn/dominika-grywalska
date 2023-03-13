import styles from "./Section.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Section: React.FC<Props> = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};
