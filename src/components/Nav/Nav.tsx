import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import styles from "./Nav.module.scss";

type Props = {
  sectionPositions: number[];
};

export const Nav: React.FC<Props> = ({ sectionPositions }) => {
  const { structure, sectionRefs } = useContext(Context);

  const isSectionActive = sectionPositions.map(
    (sectionPosition) => sectionPosition <= 81
  );
  const activeSection = isSectionActive.lastIndexOf(true);

  const [path, setPath] = useState("/");

  const handleClick = (index: number, path: string) => {
    setTimeout(() => {
      window.scrollTo({
        top: path === "/" ? sectionRefs.current[index].offsetTop - 81 : 0,
        behavior: "smooth",
      });
    }, 0);
    setPath(path);
  };

  return (
    <nav className={styles.nav}>
      {structure.sections.map((section, index) => (
        <ul
          key={index}
          className={
            path === "/" && index === activeSection ? styles.active : undefined
          }
        >
          <li>
            <Link
              to={section.path}
              onClick={() => handleClick(index, section.path)}
            >
              {section.name}
            </Link>
          </li>
          <ul>
            {section.subpages &&
              section.subpages.map((subpage, index) => (
                <li
                  key={index}
                  className={path === subpage.path ? styles.active : undefined}
                >
                  <Link
                    to={subpage.path}
                    onClick={() => handleClick(index, subpage.path)}
                  >
                    {subpage.name}
                  </Link>
                </li>
              ))}
          </ul>
        </ul>
      ))}
    </nav>
  );
};
