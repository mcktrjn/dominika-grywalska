import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const { structure, sectionRefs, isSectionVisible } = useContext(Context);

  const activeSection = isSectionVisible.lastIndexOf(true);
  const [path, setPath] = useState("/");

  const handleSectionClick = (index: number, path: string) => {
    setTimeout(() => {
      sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }, 100);
    setPath(path);
  };

  const handleSubpageClick = (path: string) => {
    window.scrollTo({ top: 0 });
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
              onClick={() => handleSectionClick(index, section.path)}
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
                    onClick={() => handleSubpageClick(subpage.path)}
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
