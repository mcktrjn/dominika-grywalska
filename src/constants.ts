import { Color, Expression, Language, Space, Symbol } from "./types";

export const colors: Record<Color, string> = {
  black: "#000",
  white: "#fff",
  primary10: "#001947",
  primary40: "#0657ce",
  primary90: "#dae2ff",
  neutral10: "#191b23",
  neutral40: "#5c5e67",
  neutral90: "#e1e2ec",
  neutral95: "#f0f0fa",
  neutral98: "#faf8ff",
  neutral99: "#fefbff",
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

export const headerHeight = 65;

//

export const heading = `Lorem ipsum dolor sit amet`;
export const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore __magna aliqua__. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
export const imageSrc = `https://images.unsplash.com/photo-1597756900506-34d40254dea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80`;
export const imageAlt = `Red flower and lemon`;

export const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore __magna aliqua__. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

### Lorem ipsum dolor __sit amet__ 
Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore __magna aliqua__. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
> _Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum_. 
>
> __- Marcus Tullius Cicero__ 

#### Lorem ipsum dolor sit amet 
Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore __magna aliqua__. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur 
- Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 

![${imageAlt}](${imageSrc}) 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore __magna aliqua__. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
