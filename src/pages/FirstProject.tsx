import { useContext } from "react";
import { Context } from "../App";
import { Page } from "../components";

export const FirstProject = () => {
  const { structure, sectionsRefs, sectionsVisibility } = useContext(Context);

  if (!structure.sections[2].subpages) structure.sections[2].subpages = [];
  const sections = structure.sections[2].subpages[0].sections;

  return (
    <Page
      sections={sections}
      sectionsRefs={sectionsRefs}
      sectionsVisibility={sectionsVisibility}
    />
  );
};
