export type Color =
  | "white"
  | "black"
  | "primary"
  | "primaryLight"
  | "neutral50"
  | "neutral100"
  | "neutral200"
  | "neutral700"
  | "neutral900";

export type Context = {
  structure: Structure;
  sectionsRefs: any; // TODO: fix "any" type
  sectionsVisibility: boolean[];
  texts: any; // TODO: fix "any" type
};

export type Expression = {
  character: "_";
  quantifier: 1 | 2 | 3;
  string: "_" | "__" | "___";
};

export type Language = "EN" | "PL";

export type Space = "EMSP" | "NBSP" | "ZWSP";

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

export type Symbol = "arrowDropDown" | "northEast" | "translate";
