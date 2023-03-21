export type Color =
  | "success100"
  | "success300"
  | "neutral50"
  | "neutral700"
  | "neutral900";

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
  sectionRefs: any;
  isSectionVisible: boolean[];
};
