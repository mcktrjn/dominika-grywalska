import { Hero, Projects, Test } from "./sections";
import { Color, Structure } from "./types";

export const colors: Record<Color, string> = {
  success100: "#d7f5dd",
  success300: "#4cc76e",
  neutral50: "#f7f7f8",
  neutral700: "#434356",
  neutral900: "#131318",
};

export const structure: Structure = {
  name: "home",
  sections: [
    { name: "Hero", path: "/", element: <Hero /> },
    { name: "About me", path: "/", element: <Test /> },
    {
      name: "Projects",
      path: "/",
      element: <Projects />,
      subpages: [
        {
          name: "First project",
          path: "/projects/first-project",
          sections: [{ element: <Test /> }, { element: <Test /> }],
        },
      ],
    },
  ],
};
