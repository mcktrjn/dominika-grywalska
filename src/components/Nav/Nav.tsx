import cx from "classnames";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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

  const addActiveClassName = (condition: boolean) => {
    return condition ? styles.active : undefined;
  };

  const body = document.body;
  body.classList.toggle("visible", isListVisible);
  body.classList.length === 0 && body.removeAttribute("class");

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
              className={cx(
                addActiveClassName(path === "/" && index === activeSection),
                addActiveClassName(sectionPositions.length === 0 && index === 0)
              )}
              onClick={() => handleLinkClick(index, section.path)}
            >
              {texts.nav[section.name]}
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
                        <span className={styles.pill}>{`0${index + 1}`}</span>
                        {texts.nav[subpage.name]}
                      </div>
                      <Icon name="north_east" />
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
          <Icon className={styles.pill} name="translate" />
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
