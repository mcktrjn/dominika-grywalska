import { useContext } from "react";
import { Context } from "../App";
import { Page } from "../components";

export const FirstProject = () => {
  const { structure, sectionRefs, isSectionVisible } = useContext(Context);

  if (!structure.sections[2].subpages) structure.sections[2].subpages = [];
  const sections = structure.sections[2].subpages[0].sections;

  return (
    <Page
      sections={sections}
      sectionRefs={sectionRefs}
      isSectionVisible={isSectionVisible}
    />
  );
};
