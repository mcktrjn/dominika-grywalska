import cx from "classnames";
import styles from "./Button.module.scss";

type Props = {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

export const Button: React.FC<Props> = ({
  icon,
  iconPosition = "right",
  onClick,
  children,
}) => {
  const componentClassName = cx(styles.button, {
    [styles["iconPosition-left"]]: icon && iconPosition === "left",
    [styles["iconPosition-right"]]: icon && iconPosition === "right",
  });

  return (
    <button className={componentClassName} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
};
