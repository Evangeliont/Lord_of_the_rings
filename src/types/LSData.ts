import { CharacterCustomElement } from "./DataApiTypes";

export interface LSData {
  username: string;
  email: string;
  password: string;
  favorite: CharacterCustomElement[];
  history: string[];
}
