import { Article, Projects, Start, WorkInProgress } from "./sections";
import { Structure } from "./types";

export const structure: Structure = {
  name: "home",
  sections: [
    { name: "start", path: "/", element: <Start /> },
    { name: "about", path: "/", element: <WorkInProgress index={1} /> },
    {
      name: "projects",
      path: "/",
      element: <Projects />,
      subpages: [
        {
          name: "firstProject",
          path: "/projects/first-project",
          sections: [{ element: <Article /> }],
        },
        {
          name: "secondProject",
          path: "/projects/second-project",
          sections: [{ element: <Article /> }],
        },
        {
          name: "thirdProject",
          path: "/projects/third-project",
          sections: [{ element: <Article /> }],
        },
      ],
    },
    { name: "contact", path: "/", element: <WorkInProgress index={3} /> },
  ],
};
