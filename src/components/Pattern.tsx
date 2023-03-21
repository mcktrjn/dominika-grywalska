import { colors } from "../consts";
import { Color } from "../types";

type Props = {
  width: number;
  height: number;
  fill?: Color;
};

export const Pattern: React.FC<Props> = ({
  width,
  height,
  fill = "neutral900",
}) => {
  return (
    <svg width={width} height={height}>
      <pattern id="pattern" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="1" height="1" fill={colors[fill]} />
        <rect x="4" y="4" width="1" height="1" fill={colors[fill]} />
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  );
};
