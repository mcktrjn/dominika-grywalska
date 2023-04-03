import { createContext, useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "./components";
import { structure } from "./constants";
import { useScrollPosition, useWindowSize } from "./hooks";
import { FirstProject, Home } from "./pages";
import translations from "./translations.json";
import { Language, Context as Props, Structure } from "./types";

export const Context = createContext<Props>({
  structure: {} as Structure,
  sectionRefs: "",
  isSectionVisible: [],
  texts: "",
});

function App() {
  const { windowHeight } = useWindowSize();
  const scrollPosition = useScrollPosition();

  const sectionRefs = useRef<any>([]);
  const [sectionPositions, setSectionPositions] = useState([]);

  useEffect(() => {
    setSectionPositions(
      sectionRefs.current.map(
        (sectionRef: any) => sectionRef?.getBoundingClientRect().y
      )
    );
  }, [scrollPosition]);

  const isSectionVisible = sectionPositions.map(
    (sectionPosition) => sectionPosition < windowHeight
  );

  const [language, setLanguage] = useState<Language>("en");
  const handleLanguageSwitchClick = () => {
    setLanguage(language === "en" ? "pl" : "en");
  };
  const texts = translations[language];

  return (
    <Context.Provider
      value={{
        structure,
        sectionRefs,
        isSectionVisible,
        texts,
      }}
    >
      <Router>
        <Navbar>
          <Container size="large">
            <Nav
              sectionPositions={sectionPositions}
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
