import cx from "classnames";
import React from "react";
import { colors } from "../../consts";
import { Color } from "../../types";
import styles from "./Typography.module.scss";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  isfontLora?: boolean;
  weight?: 400 | 500 | 700;
  color?: Color;
  children: React.ReactNode;
};

type AdditionalProps = {
  Decoration: React.FC<DecorationProps>;
};

export const Typography: React.FC<Props> & AdditionalProps = ({
  tag,
  isfontLora = false,
  weight,
  color = "neutral900",
  children,
}) => {
  const fontClassName = { [styles["font-lora"]]: isfontLora };
  const weightClassName = styles[`weight-${weight}`];
  const componentClassName = cx(fontClassName, weightClassName);

  const headingColor = colors[color];
  const colorProperty = tag === "p" ? colors["neutral700"] : headingColor;

  return React.createElement(
    tag,
    {
      className: componentClassName || undefined,
      style: { color: colorProperty },
    },
    children
  );
};

type DecorationProps = {
  color?: Color;
  decoration: "background" | "underline";
  decorationColor?: Color;
  children: string;
};

const Decoration: React.FC<DecorationProps> = ({
  color = "neutral900",
  decoration,
  decorationColor = "success300",
  children,
}) => {
  const decorationClassName = styles[`decoration-${decoration}`];
  const componentClassName = decorationClassName;

  const colorProperty = colors[color];
  const backgroundColor = colors[decorationColor];
  const backgroundImageProperty = `linear-gradient(${backgroundColor}, ${backgroundColor})`;

  return (
    <span
      className={componentClassName}
      style={{ color: colorProperty, backgroundImage: backgroundImageProperty }}
    >
      {children}
    </span>
  );
};

Typography.Decoration = Decoration;
