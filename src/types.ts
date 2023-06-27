export type Color =
  | "black"
  | "white"
  | "primary10"
  | "primary40"
  | "primary90"
  | "neutral10"
  | "neutral40"
  | "neutral90"
  | "neutral95"
  | "neutral98"
  | "neutral99";

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
