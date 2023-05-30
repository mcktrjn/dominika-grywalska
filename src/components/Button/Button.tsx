import cx from "classnames";
// import { Icon } from "../../components";
// import { Symbol } from "../../types";
import styles from "./Button.module.scss";

type Props = {
  text: string;
  // icon?: Symbol;
  // iconPosition?: "left" | "right";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Props> = ({
  text,
  // icon,
  // iconPosition = "right",
  onClick,
}) => {
  const componentClassName = cx(
    styles.button
    // { [styles[`iconPosition-${iconPosition}`]]: icon }
  );

  return (
    <button className={componentClassName} onClick={onClick}>
      {text}
      {/* {icon && <Icon icon={icon} />} */}
    </button>
  );
};
