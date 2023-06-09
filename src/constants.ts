import { Character, Color, Language, Symbol } from "./types";

export const characters: Record<Character, string> = {
  ENSP: " ",
  NBSP: " ",
  ZWSP: "​",
};

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

export const languages: Language[] = ["EN", "PL"];

export const symbols: Record<Symbol, string> = {
  arrowDropDown: "arrow_drop_down",
  northEast: "north_east",
  translate: "translate",
};

export const navbarHeight = 65;
