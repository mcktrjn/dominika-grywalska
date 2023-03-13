import cx from "classnames";
import styles from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: string;
};

export const Button: React.FC<Props> = ({
  icon,
  iconPosition = "right",
  children,
  ...rest
}) => {
  const componentClassName = cx(styles.button, {
    [styles["iconPosition-left"]]: icon && iconPosition === "left",
    [styles["iconPosition-right"]]: icon && iconPosition === "right",
  });

  return (
    <button className={componentClassName} {...rest}>
      {children}
      {icon}
    </button>
  );
};
