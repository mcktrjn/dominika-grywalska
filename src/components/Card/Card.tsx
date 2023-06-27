import cx from "classnames";
import { Chip, Icon, Markdown, Typography } from "../../components";
import { spaces } from "../../constants";
import { useWindowSize } from "../../hooks";
import styles from "./Card.module.scss";

type Props = {
  size?: "large" | "small";
  imageSrc: string;
  imageAlt: string;
  imagePosition?: number[];
  author: string;
  date: string;
  heading: string;
  paragraph: string;
  chips: string[];
  decorationRange?: number[];
};

export const Card: React.FC<Props> = ({
  size = "small",
  imageSrc,
  imageAlt,
  imagePosition = [50, 50],
  author,
  date,
  heading,
  paragraph,
  chips,
  decorationRange,
}) => {
  const { windowWidth } = useWindowSize();
  const isSizeSmall = size === "small" || windowWidth <= 768;

  const componentClassName = cx(styles.card, styles[`size-${size}`]);

  return (
    <div className={componentClassName}>
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{ objectPosition: `${imagePosition[0]}% ${imagePosition[1]}%` }}
      />
      <div className={styles.textBox}>
        <Typography
          variant="p"
          color={isSizeSmall ? "neutral40" : "white"}
          text={`${author + spaces.EMSP}•${spaces.EMSP + date}`}
        />
        <div>
          <Typography
            isVisible
            variant={isSizeSmall ? "h4" : "h2"}
            isFamilyPlayfairDisplay
            weight={600}
            color={isSizeSmall ? "primary10" : "white"}
            decorationColor="white"
            decorationTextColor="black"
            decorationRange={decorationRange}
            text={heading}
          />
          {isSizeSmall && <Icon icon="northEast" />}
        </div>
        <div>
          <Markdown text={paragraph} length={isSizeSmall ? 120 : 240} />
        </div>
        <div>
          {chips.map((chip, index) =>
            index === 0 ? (
              <Chip
                key={index}
                color={isSizeSmall ? "white" : "black"}
                fillColor={isSizeSmall ? "primary40" : "white"}
                text={chip}
              />
            ) : (
              <Chip
                key={index}
                color={isSizeSmall ? "primary40" : "white"}
                text={chip}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
