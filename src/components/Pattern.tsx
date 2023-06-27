import { colors } from "../constants";
import { Color } from "../types";

type Props = {
  width?: number;
  height?: number;
  color?: Color;
};

export const Pattern: React.FC<Props> = ({
  width,
  height,
  color = "primary10",
}) => {
  return (
    <svg width={width} height={height}>
      <pattern id="pattern" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="1" height="1" fill={colors[color]} />
        <rect x="4" y="4" width="1" height="1" fill={colors[color]} />
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  );
};
