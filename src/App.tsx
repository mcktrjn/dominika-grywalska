import { createContext, useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "./components";
import { useScrollPosition, useWindowSize } from "./hooks";
import { FirstProject, Home } from "./pages";
import { structure } from "./structure";
import translations from "./translations.json";
import { Language, Context as Props, Structure } from "./types";

export const Context = createContext<Props>({
  structure: {} as Structure,
  sectionsRefs: "",
  sectionsVisibility: [],
  texts: "",
});

function App() {
  const { windowHeight } = useWindowSize();
  const scrollPosition = useScrollPosition();

  const sectionsRefs = useRef<any>([]);
  const [sectionsPositions, setSectionsPositions] = useState([]);

  useEffect(() => {
    setSectionsPositions(
      sectionsRefs.current.map((sectionRef: any) => {
        return sectionRef?.getBoundingClientRect().y;
      })
    );
  }, [scrollPosition]);

  const sectionsVisibility = sectionsPositions.map((sectionPosition) => {
    return sectionPosition < windowHeight;
  });

  const [language, setLanguage] = useState<Language>("EN");
  const handleLanguageSwitchClick = () => {
    setLanguage(language === "EN" ? "PL" : "EN");
  };
  const texts = translations[language];

  return (
    <Context.Provider
      value={{
        structure,
        sectionsRefs,
        sectionsVisibility,
        texts,
      }}
    >
      <Router>
        <Navbar>
          <Container size="large">
            <Nav
              sectionsPositions={sectionsPositions}
              language={language}
              handleLanguageSwitchClick={handleLanguageSwitchClick}
            />
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/first-project" element={<FirstProject />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
