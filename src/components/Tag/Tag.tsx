import cx from "classnames";
import { Icon } from "../../components";
import { colors } from "../../constants";
import { Color, Symbol } from "../../types";
import styles from "./Tag.module.scss";

type Props = {
  size?: "large" | "small";
  width?: number;
  color?: Color;
  fillColor?: Color;
  text?: string;
  icon?: Symbol;
};

export const Tag: React.FC<Props> = ({
  size = "small",
  width,
  color = "primary",
  fillColor,
  text,
  icon,
}) => {
  const componentClassName = cx(styles.tag, styles[`size-${size}`]);

  return (
    <span
      className={componentClassName}
      style={{
        width: `${width}px`,
        borderColor: !fillColor ? colors[color] : colors[fillColor],
        backgroundColor: fillColor && colors[fillColor],
        color: colors[color],
      }}
    >
      {text}
      {icon && <Icon color={color} icon={icon} />}
    </span>
  );
};
