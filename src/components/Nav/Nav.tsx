import cx from "classnames";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../App";
import { Chip, Icon, Switch } from "../../components";
import { languages, navbarHeight } from "../../constants";
import { Language } from "../../types";
import styles from "./Nav.module.scss";

type Props = {
  sectionsPositions: number[];
  language: Language;
  handleLanguageSwitchClick: () => void;
};

export const Nav: React.FC<Props> = ({
  sectionsPositions,
  language,
  handleLanguageSwitchClick,
}) => {
  const { structure, sectionsRefs, texts } = useContext(Context);
  const { pathname: path, hash } = useLocation();

  const sectionsActivity = sectionsPositions.map((sectionPosition) => {
    return sectionPosition <= navbarHeight;
  });
  const activeSection = sectionsActivity.lastIndexOf(true);
  const [isListVisible, setIsListVisible] = useState(false);

  const getSectionToNavbarDistance = (index: number) => {
    return sectionsRefs.current[index].offsetTop - navbarHeight + 1;
  };

  useEffect(() => {
    if (hash) {
      const index = structure.sections.findIndex((section) => {
        return section.name === hash.replace("#", "");
      });
      window.scrollTo({ top: getSectionToNavbarDistance(index) });
    }
  }, []);

  const handleLinkClick = (index: number) => {
    setTimeout(() => {
      window.scrollTo({
        top: getSectionToNavbarDistance(index),
        behavior: "smooth",
      });
    }, 0);
    setIsListVisible(false);
  };

  const body = document.body;
  body.classList.toggle("visible", isListVisible);
  if (body.classList.length === 0) body.removeAttribute("class");

  return (
    <nav className={styles.nav}>
      <ul className={cx(styles.list, { [styles.visible]: isListVisible })}>
        {structure.sections.map((section, index) => (
          <li key={index} className={styles.listItem}>
            <Link
              to={`${section.path}#${section.name}`}
              className={
                (section.path === path && index === activeSection) ||
                (sectionsPositions.length === 0 && `#${section.name}` === hash) // index === 0 ||
                  ? styles.active
                  : undefined
              }
              onClick={() => handleLinkClick(index)}
            >
              {texts.nav[section.name]}
              {section.subpages && (
                <Icon
                  color={section.path === path ? "primary10" : "primary40"}
                  icon="arrowDropDown"
                />
              )}
            </Link>
            {section.subpages && (
              <ul className={styles.nestedList}>
                {section.subpages.map((subpage, index) => (
                  <li key={index} className={styles.nestedListItem}>
                    <Link to={subpage.path} onClick={() => handleLinkClick(0)}>
                      <div>
                        <Chip
                          width={24}
                          color={subpage.path === path ? "white" : "primary40"}
                          fillColor={
                            subpage.path === path ? "primary40" : "primary90"
                          }
                          text={`0${index + 1}`}
                        />
                        {texts.nav[subpage.name]}
                      </div>
                      <Icon
                        color={
                          subpage.path === path ? "neutral90" : "primary40"
                        }
                        icon="northEast"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <LanguageSwitch
          language={language}
          handleLanguageSwitchClick={handleLanguageSwitchClick}
        />
        <li className={cx(styles.listItem, styles.border)} />
        <DownloadButton />
      </ul>
      <button
        className={styles.hamburger}
        onClick={() => setIsListVisible(!isListVisible)}
      >
        Menu
      </button>
    </nav>
  );
};

type LanguageSwitchProps = Omit<Props, "sectionsPositions">;

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  language,
  handleLanguageSwitchClick,
}) => {
  const { texts } = useContext(Context);

  return (
    <li className={cx(styles.listItem, styles.languageSwitch)}>
      <div
        className={styles.switchBox}
        onClick={() => handleLanguageSwitchClick()}
      >
        <div className={styles.switchLabel}>
          <Chip width={24} fillColor="primary90" icon="translate" />
          {`${texts.nav.selectLanguage}:`}
        </div>
        <Switch values={languages} activeValue={language} />
      </div>
    </li>
  );
};

const DownloadButton = () => {
  const { texts } = useContext(Context);

  return (
    <li className={cx(styles.listItem, styles.downloadButton)}>
      <button>{texts.nav.downloadCV}</button>
    </li>
  );
};
