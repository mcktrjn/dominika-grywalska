import cx from "classnames";
import React from "react";
import { colors } from "../../constants";
import { Color } from "../../types";
import styles from "./Typography.module.scss";

type Props = {
  className?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: Color;
  children: React.ReactNode;
} & (
  | {
      isFamilySerif?: true;
      weight?: 400 | 500 | 600 | 700;
    }
  | {
      isFamilySerif?: false;
      weight?: 300 | 400 | 500 | 600 | 700;
    }
);

type AdditionalProps = {
  Decoration: React.FC<DecorationProps>;
};

export const Typography: React.FC<Props> & AdditionalProps = ({
  className,
  tag,
  isFamilySerif = false,
  weight,
  color,
  children,
}) => {
  const familyClassName = { [styles["family-serif"]]: isFamilySerif };
  const weightClassName = styles[`weight-${weight}`];
  const componentClassName = cx(familyClassName, weightClassName, className);

  const headingColor = colors[color || "neutral900"];
  const paragraphColor = colors[color || "neutral700"];

  let colorProperty;
  if (tag !== "p") {
    colorProperty = headingColor;
  } else {
    colorProperty = paragraphColor;
  }

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
