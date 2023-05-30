import styles from "./Switch.module.scss";

type Props = {
  values: string[];
  activeValue: string;
};

export const Switch: React.FC<Props> = ({ values, activeValue }) => {
  return (
    <div className={styles.switch}>
      <span>{values[0]}</span>
      <span>{values[1]}</span>
      <span
        className={styles.activeValue}
        style={
          activeValue === values[0]
            ? { transform: "translateX(0)" }
            : { transform: "translateX(24px)" }
        }
      >
        {activeValue}
      </span>
    </div>
  );
};
