import { Context } from "../../types";
import styles from "./Page.module.scss";

type Props = Omit<Context, "structure" | "texts"> & {
  sections: { element: React.ReactNode }[];
};

export const Page: React.FC<Props> = ({
  sections,
  sectionsRefs,
  sectionsVisibility,
}) => {
  return (
    <div className={styles.page}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={sectionsVisibility[index] ? styles.visible : undefined}
          ref={(element) => (sectionsRefs.current[index] = element)}
        >
          {section.element}
        </div>
      ))}
    </div>
  );
};
