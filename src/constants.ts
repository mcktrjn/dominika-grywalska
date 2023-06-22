import { Color, Expression, Language, Space, Symbol } from "./types";

export const colors: Record<Color, string> = {
  white: "#fff",
  black: "#000",
  primary: "#4cc76e",
  primaryLight: "#d7f5dd",
  neutral50: "#f7f7f8",
  neutral100: "#ebebef",
  neutral200: "#d8d8df",
  neutral700: "#434356",
  neutral900: "#131318",
};

export const expressions: Expression[] = [
  { character: "_", quantifier: 1, string: "_" },
  { character: "_", quantifier: 2, string: "__" },
  { character: "_", quantifier: 3, string: "___" },
];

export const languages: Language[] = ["EN", "PL"];

export const spaces: Record<Space, string> = {
  EMSP: " ",
  NBSP: " ",
  ZWSP: "​",
};

export const symbols: Record<Symbol, string> = {
  arrowDropDown: "arrow_drop_down",
  northEast: "north_east",
  translate: "translate",
};

export const navbarHeight = 65;

//

export const heading = "Lorem ipsum dolor sit amet";
export const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore __magna aliqua__. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
