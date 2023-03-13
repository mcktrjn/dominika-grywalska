import cx from "classnames";
import React from "react";
import { colors } from "../../consts";
import { Color } from "../../types";
import styles from "./Typography.module.scss";

type Props = {
  weight?: 400 | 500 | 700;
  color?: Color;
  additionColor?: Color; // poprawić
} & (
  | {
      tag: "h1" | "h2" | "h3";
      addition?: "background" | "underline";
      children: string;
    }
  | {
      tag: "h4" | "h5" | "h6" | "p";
      addition?: false;
      children: React.ReactNode;
    }
);

export const Typography: React.FC<Props> = ({
  tag,
  weight,
  color,
  addition,
  additionColor,
  children,
}) => {
  const weightClassName = styles[`weight-${weight}`];
  const additionClassName = styles[`addition-${addition}`];
  const componentClassName = cx(weightClassName, additionClassName);

  const headingColor = colors[color || "neutral900"];
  const paragraphColor = colors[color || "neutral700"];

  let colorProperty;
  if (tag !== "p") {
    colorProperty = headingColor;
  } else {
    colorProperty = paragraphColor;
  }

  const backgroundColor = colors[additionColor || "success300"];
  const backgroundImageProperty = `linear-gradient(${backgroundColor}, ${backgroundColor}`;

  return addition ? (
    <div>
      {React.createElement(
        tag,
        {
          className: componentClassName,
          style: {
            color: colorProperty,
            backgroundImage: backgroundImageProperty,
          },
        },
        children
      )}
    </div>
  ) : (
    React.createElement(
      tag,
      {
        className: componentClassName || null,
        style: { color: colorProperty },
      },
      children
    )
  );
};
