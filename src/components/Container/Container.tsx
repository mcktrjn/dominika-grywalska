import cx from "classnames";
import styles from "./Container.module.scss";

type Props = {
  className?: string;
  size?: "large" | "medium" | "small";
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({
  className,
  size = "medium",
  children,
}) => {
  const componentClassName = cx(
    styles.container,
    styles[`size-${size}`],
    className
  );

  return <div className={componentClassName}>{children}</div>;
};
