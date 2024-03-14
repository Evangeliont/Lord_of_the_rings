import {
  CharacterApi,
  CharacterCustomElement,
  CharacterApiElement,
} from "../types/Characters";

export const transformDataType = (
  response: CharacterApi
): CharacterCustomElement[] => {
  const transformData = response.docs.map((el: CharacterApiElement) => {
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
    };
  });
  return transformData.filter((el) => (el.race === "NaN" ? false : true));
};
