import cx from "classnames";

type Props = {
  className?: string;
  name: string;
  // TODO: add "color" property
};

export const Icon: React.FC<Props> = ({ className, name }) => {
  const componentClassName = cx("material-symbols-sharp", className);

  return <span className={componentClassName}>{name}</span>;
};
