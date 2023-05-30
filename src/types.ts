export type Character = "ZWSP" | "NBSP";

export type Color =
  | "white"
  | "primary"
  | "primaryLight"
  | "neutral50"
  | "neutral100"
  | "neutral200"
  | "neutral700"
  | "neutral900";

export type Language = "EN" | "PL";

export type Symbol = "arrowDropDown" | "northEast" | "translate";

export type Structure = {
  name: string;
  sections: {
    name: string;
    path: string;
    element: React.ReactNode;
    subpages?: {
      name: string;
      path: string;
      sections: {
        element: React.ReactNode;
      }[];
    }[];
  }[];
};

export type Context = {
  structure: Structure;
  sectionsRefs: any; // TODO: fix "any" type
  sectionsVisibility: boolean[];
  texts: any; // TODO: fix "any" type
};
