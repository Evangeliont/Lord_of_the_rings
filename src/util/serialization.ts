import {
  CharacterApi,
  CharacterApiElement,
  CharacterCustomElement,
} from "../interfaces/character";
import {
  QuoteApi,
  QuoteApiElement,
  QuoteCustomElement,
} from "../interfaces/quote";

/** Сериализация персонажей */
export const serializeCharacters = (
  response: CharacterApi
): CharacterCustomElement[] => {
  return response.docs
    .filter((el: CharacterApiElement) => el.race !== "NaN")
    .map((el: CharacterApiElement) => ({
      id: el._id,
      birth: el.birth,
      death: el.death,
      gender: el.gender,
      hair: el.hair,
      name: el.name,
      race: el.race,
      realm: el.realm,
      spouse: el.spouse,
      wikiUrl: el.wikiUrl,
      like: false,
    }));
};

/** Сериализация цитат */
export const serializeQuotes = (response: QuoteApi): QuoteCustomElement[] => {
  return response.docs.map((el: QuoteApiElement) => ({
    id: el._id,
    dialog: el.dialog,
    movie: el.movie,
    character: el.character,
  }));
};
