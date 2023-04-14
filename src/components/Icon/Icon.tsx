import cx from "classnames";
import { colors } from "../../constants";
import { Color } from "../../types";
import styles from "./Icon.module.scss";

type Props = {
  isMaterialSymbols?: boolean;
  color?: Color;
  isBackground?: boolean;
  backgroundColor?: Color;
  children: string;
};

export const Icon: React.FC<Props> = ({
  isMaterialSymbols,
  color = "success300",
  isBackground,
  backgroundColor = "success100",
  children,
}) => {
  const componentClassName = cx({
    "material-symbols-sharp": isMaterialSymbols,
    [styles.materialSymbols]: isMaterialSymbols,
    [styles.background]: isBackground,
  });

  const colorProperty = colors[color];
  const backgroundColorProperty = isBackground
    ? colors[backgroundColor]
    : undefined;

  return (
    <span
      className={componentClassName}
      style={{ color: colorProperty, backgroundColor: backgroundColorProperty }}
    >
      {children}
    </span>
  );
};
