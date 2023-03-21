import { useContext } from "react";
import { Context } from "../App";
import { Page } from "../components";

export const Home = () => {
  const { structure, sectionRefs, isSectionVisible } = useContext(Context);
  const sections = structure.sections;

  return (
    <Page
      sections={sections}
      sectionRefs={sectionRefs}
      isSectionVisible={isSectionVisible}
    />
  );
};
