import cx from "classnames";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../App";
import { Icon, Switch } from "../../components";
import { languages } from "../../constants";
import { Language } from "../../types";
import styles from "./Nav.module.scss";

type Props = {
  sectionPositions: number[];
  language: Language;
  handleLanguageSwitchClick: () => void;
};

export const Nav: React.FC<Props> = ({
  sectionPositions,
  language,
  handleLanguageSwitchClick,
}) => {
  const { structure, sectionRefs, texts } = useContext(Context);
  const { pathname: path, hash } = useLocation();
  const navbarHeight = 65;

  const isSectionActive = sectionPositions.map((sectionPosition) => {
    return sectionPosition <= navbarHeight;
  });
  const activeSection = isSectionActive.lastIndexOf(true);
  const [isListVisible, setIsListVisible] = useState(false);

  const getSectionToNavbarDistance = (index: number) => {
    return sectionRefs.current[index].offsetTop - navbarHeight;
  };

  useEffect(() => {
    const index = structure.sections.findIndex((section) => {
      return section.name === hash.replace("#", "");
    });
    if (hash) window.scrollTo({ top: getSectionToNavbarDistance(index) });
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
  body.classList.length === 0 && body.removeAttribute("class");

  return (
    <nav className={styles.nav}>
      <ul className={cx(styles.list, { [styles.visible]: isListVisible })}>
        {structure.sections.map((section, index) => (
          <li key={index} className={styles.listItem}>
            <Link
              to={`${section.path}#${section.name}`}
              className={
                (path === "/" && index === activeSection) ||
                (sectionPositions.length === 0 && index === 0) // TODO: fix links "blinking"
                  ? styles.active
                  : undefined
              }
              onClick={() => handleLinkClick(index)}
            >
              {texts.nav[section.name]}
              {section.subpages && (
                <Icon
                  isMaterialSymbols
                  color={path !== "/" ? "success300" : "neutral900"}
                >
                  arrow_drop_down
                </Icon>
              )}
            </Link>
            {section.subpages && (
              <ul className={styles.nestedList}>
                {section.subpages.map((subpage, index) => (
                  <li key={index} className={styles.nestedListItem}>
                    <Link
                      to={subpage.path}
                      onClick={() => handleLinkClick(index)}
                    >
                      <div>
                        <Icon
                          color={path === subpage.path ? "white" : "success300"}
                          isBackground
                          backgroundColor={
                            path === subpage.path ? "success300" : "success100"
                          }
                        >{`0${index + 1}`}</Icon>
                        {texts.nav[subpage.name]}
                      </div>
                      <Icon
                        isMaterialSymbols
                        color={
                          path === subpage.path ? "neutral200" : "success300"
                        }
                      >
                        north_east
                      </Icon>
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

type LanguageSwitchProps = Omit<Props, "sectionPositions">;

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  language,
  handleLanguageSwitchClick,
}) => {
  const { texts } = useContext(Context);

  return (
    <li className={cx(styles.listItem, styles.languageSwitch)}>
      <div
        className={styles.switchContainer}
        onClick={() => handleLanguageSwitchClick()}
      >
        <div className={styles.switchLabel}>
          <Icon isMaterialSymbols isBackground>
            translate
          </Icon>
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
