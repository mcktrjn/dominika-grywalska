import { Projects, Start, Test } from "./sections";
import { Structure } from "./types";

export const structure: Structure = {
  name: "home",
  sections: [
    { name: "start", path: "/", element: <Start /> },
    { name: "about", path: "/", element: <Test /> },
    {
      name: "projects",
      path: "/",
      element: <Projects />,
      subpages: [
        {
          name: "firstProject",
          path: "/projects/first-project",
          sections: [{ element: <Test /> }],
        },
        {
          name: "secondProject",
          path: "/projects/second-project",
          sections: [{ element: <Test /> }],
        },
        {
          name: "thirdProject",
          path: "/projects/third-project",
          sections: [{ element: <Test /> }],
        },
      ],
    },
    { name: "contact", path: "/", element: <Test /> },
  ],
};
