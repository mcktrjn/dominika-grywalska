import { Context } from "../../types";
import styles from "./Page.module.scss";

type Props = Omit<Context, "structure"> & {
  sections: { element: React.ReactNode }[];
};

export const Page: React.FC<Props> = ({
  sections,
  sectionRefs,
  isSectionVisible,
}) => {
  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className={isSectionVisible[index] ? styles.visible : styles.hidden}
          ref={(element) => (sectionRefs.current[index] = element)}
        >
          {section.element}
        </div>
      ))}
    </>
  );
};
