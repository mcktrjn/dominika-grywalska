import cx from "classnames";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { Icon } from "../../components";
import { useWindowSize } from "../../hooks";
import styles from "./Nav.module.scss";

type Props = {
  sectionPositions: number[];
};

export const Nav: React.FC<Props> = ({ sectionPositions }) => {
  const { structure, sectionRefs } = useContext(Context);

  const isSectionActive = sectionPositions.map(
    (sectionPosition) => sectionPosition <= 65
  );
  const activeSection = isSectionActive.lastIndexOf(true);

  const [path, setPath] = useState("/");
  const [isListVisible, setIsListVisible] = useState(false);

  const handleLinkClick = (index: number, path: string) => {
    setTimeout(() => {
      window.scrollTo({
        top: path === "/" ? sectionRefs.current[index].offsetTop - 65 : 0,
        behavior: "smooth",
      });
    }, 0);
    setPath(path);
    // setIsListVisible(false);
  };

  const handleButtonClick = () => {
    setIsListVisible(!isListVisible);
  };

  const addActiveClassName = (condition: boolean) => {
    return condition ? styles.active : undefined;
  };

  return (
    <nav className={styles.nav}>
      {/* <Typography className={styles.logotype} tag="h4" isFamilySerif>
        D.Grywalska
      </Typography> */}
      <ul className={cx(styles.list, { [styles.visible]: isListVisible })}>
        {structure.sections.map((section, index) => (
          <li key={index} className={styles.listItem}>
            <Link
              to={section.path}
              className={addActiveClassName(
                path === "/" && index === activeSection
              )}
              onClick={() => handleLinkClick(index, section.path)}
            >
              {section.name}
              {section.subpages && (
                <Icon
                  className={addActiveClassName(path !== "/")}
                  name="arrow_drop_down"
                />
              )}
            </Link>
            {section.subpages && (
              <ul className={styles.nestedList}>
                {section.subpages.map((subpage, index) => (
                  <li key={index} className={styles.nestedListItem}>
                    <Link
                      to={subpage.path}
                      className={addActiveClassName(path === subpage.path)}
                      onClick={() => handleLinkClick(index, subpage.path)}
                    >
                      <div>
                        <span>{`0${index + 1}`}</span>
                        {subpage.name}
                      </div>
                      <Icon name="north_east" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <LanguageSwitch />
        <DownloadButton />
      </ul>
      <button className={styles.hamburger} onClick={handleButtonClick}>
        Menu
      </button>
    </nav>
  );
};

const LanguageSwitch = () => {
  const { windowWidth } = useWindowSize();

  return (
    <li className={cx(styles.listItem, styles.languageSwitch)}>
      <div>
        <div>
          <Icon name="translate" />
          {windowWidth > 768 ? "Language:" : "Select language:"}
        </div>
        <div>
          <span>EN</span>
          <span>/</span>
          <span>PL</span>
        </div>
      </div>
    </li>
  );
};

const DownloadButton = () => {
  return (
    <li className={cx(styles.listItem, styles.downloadButton)}>
      <button>Download CV</button>
    </li>
  );
};
