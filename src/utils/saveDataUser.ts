import { LSData } from "../types/LSData";
import { CharacterCustomElement } from "../types/Characters";

export const addUserLS = (
  username: string | undefined,
  email: string,
  password: string | undefined
) => {
  if (email) {
    localStorage.setItem(
      email,
      JSON.stringify({
        username: username,
        email: email,
        password: password,
        favorite: [],
        history: [],
      })
    );
  }
};

export const updateUserInfoLS = (email: string): LSData | undefined => {
  const items = localStorage.getItem(email);
  let parseItems: LSData;
  if (items) {
    parseItems = JSON.parse(items);
    localStorage.setItem("authorized", parseItems.email);
    return parseItems;
  }
};

export const getParseItemsLS = (email: string): LSData | undefined => {
  const items = localStorage.getItem(email);
  let parseItems: LSData;
  if (items) {
    parseItems = JSON.parse(items);
    return parseItems;
  }
};

export const getAuthLS = (): string | null => {
  return localStorage.getItem("authorized");
};

export const logOutLS = () => {
  localStorage.removeItem("authorized");
};

export const getFavoriteItemsFromLS = (
  email: string
): CharacterCustomElement[] => {
  const items = localStorage.getItem(email);
  let parseItem: CharacterCustomElement[];
  if (items) {
    parseItem = JSON.parse(items);
    return parseItem;
  }
  parseItem = [];
  return parseItem;
};
