import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { characters, colors } from "../../constants";
import { Color } from "../../types";
import styles from "./Typography.module.scss";

type Props = {
  className?: string;
  isVisible?: boolean;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  isFamilyPlayfairDisplay?: boolean;
  weight?: 400 | 500 | 600 | 700;
  color?: Color;
  decoration?: "background" | "underline";
  decorationColor?: Color;
  decorationTextColor?: Color;
  decorationStart?: number;
  decorationEnd?: number;
  text: string;
};

export const Typography: React.FC<Props> = ({
  className,
  isVisible,
  variant,
  isFamilyPlayfairDisplay,
  weight,
  color,
  decoration = "background",
  decorationColor = "primaryLight",
  decorationTextColor = "primary",
  decorationStart,
  decorationEnd,
  text,
}) => {
  const Tag = variant;
  const componentClassName = cx(
    {
      [styles.visible]: isVisible,
      [styles["family-playfairDisplay"]]: isFamilyPlayfairDisplay,
    },
    styles[`weight-${weight}`],
    className
  );

  const headingColor = colors[color || "neutral900"];
  const paragraphColor = colors[color || "neutral700"];
  const colorProperty = variant !== "p" ? headingColor : paragraphColor;

  const words = text.split(" ");
  const getDecorationRange = (index: number) => {
    if (decorationStart !== undefined && decorationEnd !== undefined) {
      return index >= decorationStart && index <= decorationEnd;
    }
  };

  const spaceRef = useRef<HTMLSpanElement>(null);
  const [spaceWidth, setSpaceWidth] = useState(0);

  useEffect(() => {
    if (spaceRef.current) {
      setSpaceWidth(spaceRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <Tag
      className={componentClassName || undefined}
      style={{ color: colorProperty }}
    >
      {["h1", "h2", "h3"].includes(variant) ? (
        <>
          {words.map((word, index) =>
            getDecorationRange(index) ? (
              <span key={index} className={styles.animation}>
                <span
                  className={styles[`decoration-${decoration}`]}
                  style={{
                    padding: `0 ${spaceWidth / 2}px`,
                    backgroundImage: `linear-gradient(${colors[decorationColor]}, ${colors[decorationColor]})`,
                    color: colors[decorationTextColor],
                  }}
                >
                  {word + characters.ZWSP}
                </span>
              </span>
            ) : (
              <span key={index} className={styles.animation}>
                <span> {word} </span>
              </span>
            )
          )}
          <span
            ref={spaceRef}
            style={{ position: "absolute", userSelect: "none" }}
          >
            {characters.NBSP}
          </span>
        </>
      ) : (
        text
      )}
    </Tag>
  );
};
