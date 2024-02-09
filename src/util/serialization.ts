import {
  Character,
  CharacterData,
  CharacterCustomData,
} from "../interfaces/character";
import { Quote, QuoteCustomData, QuoteData } from "../interfaces/quote";

/** Преобразование серверных данных под клиента */
export const serializationCharacter = (
  response: Character
): CharacterCustomData[] => {
  const convetrData = response.docs.map((el: CharacterData) => {
    return {
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
    };
  });
  return convetrData.filter((el) => (el.race === "NaN" ? false : true));
};

/** Преобразование серверных данных под клиента */
export const serializationQuote = (response: Quote): QuoteCustomData[] => {
  return response.docs.map((el: QuoteData) => ({
    id: el._id,
    dialog: el.dialog,
    movie: el.movie,
    character: el.character,
  }));
};
