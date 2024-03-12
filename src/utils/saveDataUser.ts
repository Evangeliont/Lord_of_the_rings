import { LSData } from "../types/LSData";

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
