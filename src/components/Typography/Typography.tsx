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
  Animation: React.FC<AnimationProps>;
};

export const Typography: React.FC<Props> & AdditionalProps = ({
  className,
  tag,
  isFamilySerif,
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
  decoration?: "background" | "underline";
  decorationColor?: Color;
  children: string;
};

const Decoration: React.FC<DecorationProps> = ({
  color = "success300",
  decoration = "background",
  decorationColor = "success100",
  children,
}) => {
  const colorProperty = colors[color];
  const backgroundColor = colors[decorationColor];
  const backgroundImageProperty = `linear-gradient(${backgroundColor}, ${backgroundColor})`;

  return (
    <span
      className={styles[`decoration-${decoration}`]}
      style={{ color: colorProperty, backgroundImage: backgroundImageProperty }}
    >
      {children}
    </span>
  );
};

Typography.Decoration = Decoration;

type AnimationProps = DecorationProps & {
  isVisible: boolean;
  decorationStart?: number; // TODO: fix typing to make "decorationStart" and "decorationEnd" props required if "decoration" is true
  decorationEnd?: number;
};

const Animation: React.FC<AnimationProps> = ({
  isVisible,
  color,
  decoration,
  decorationColor,
  decorationStart,
  decorationEnd,
  children,
}) => {
  const words = children.split(" ");
  const getDecorationRange = (index: number) => {
    if (decorationStart !== undefined && decorationEnd !== undefined) {
      return index >= decorationStart && index <= decorationEnd;
    }
  };

  const componentClassName = cx(styles.animation, {
    [styles.visible]: isVisible,
  });

  return (
    <>
      {words.map((word, index) =>
        getDecorationRange(index) ? (
          <span key={index} className={componentClassName}>
            <Typography.Decoration
              color={color}
              decoration={decoration}
              decorationColor={decorationColor}
            >
              {word}
            </Typography.Decoration>
          </span>
        ) : (
          <span key={index} className={componentClassName}>
            <span> {word} </span>
          </span>
        )
      )}
    </>
  );
};

Typography.Animation = Animation;
