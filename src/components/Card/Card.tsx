import cx from "classnames";
import { Chip, Icon, Typography } from "../../components";
import { characters } from "../../constants";
import { shortenText } from "../../helpers";
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
          color={isSizeSmall ? "neutral700" : "white"}
          text={`${author + characters.ENSP}•${characters.ENSP + date}`}
        />
        <div>
          <Typography
            isVisible={true}
            variant={isSizeSmall ? "h4" : "h2"}
            isFamilyPlayfairDisplay
            weight={600}
            color={isSizeSmall ? "neutral900" : "white"}
            decorationColor="white"
            decorationTextColor="black"
            decorationRange={decorationRange}
            text={heading}
          />
          {isSizeSmall && <Icon icon="northEast" />}
        </div>
        <Typography
          variant="p"
          color={isSizeSmall ? "neutral700" : "white"}
          text={shortenText(paragraph, isSizeSmall ? 100 : 200)}
        />
        <div>
          {chips.map((chip, index) =>
            index === 0 ? (
              <Chip
                key={index}
                color={isSizeSmall ? "white" : "black"}
                fillColor={isSizeSmall ? "primary" : "white"}
                text={chip}
              />
            ) : (
              <Chip
                key={index}
                color={isSizeSmall ? "primary" : "white"}
                text={chip}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
