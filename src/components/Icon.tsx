import { colors, symbols } from "../constants";
import { Color, Symbol } from "../types";

type Props = {
  color?: Color;
  icon: Symbol;
};

export const Icon: React.FC<Props> = ({ color = "primary40", icon }) => {
  return (
    <span
      className="material-symbols-sharp"
      style={{ color: colors[color], userSelect: "none" }}
    >
      {symbols[icon]}
    </span>
  );
};
