import { createContext, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "./components";
import { structure } from "./consts";
import { useScrollPosition, useWindowSize } from "./hooks";
import { FirstProject, Home } from "./pages";
import { Context as Props, Structure } from "./types";

export const Context = createContext<Props>({
  structure: {} as Structure,
  sectionRefs: "",
  isSectionVisible: [],
});

function App() {
  const { windowHeight } = useWindowSize();
  const scrollPosition = useScrollPosition();

  const sectionRefs = useRef<any>([]);
  const [sectionPositions, setSectionPositions] = useState([0]); // TODO: find out why it has to be "[0]" and not "[]"

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

  return (
    <Context.Provider value={{ structure, sectionRefs, isSectionVisible }}>
      <Router>
        <Navbar>
          <Container size="large">
            <Nav sectionPositions={sectionPositions} />
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
