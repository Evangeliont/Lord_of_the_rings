import { CharacterApi, CharacterCustomElement } from "../types/DataApiTypes";

export const transformData = (
  response: CharacterApi
): CharacterCustomElement[] => {
  const transformedData: CharacterCustomElement[] = response.docs.map(
    (item) => ({
      id: item._id,
      birth: item.birth,
      death: item.death,
      gender: item.gender,
      hair: item.hair,
      name: item.name,
      race: item.race,
      realm: item.realm,
      spouse: item.spouse,
      wikiUrl: item.wikiUrl,
    })
  );

  return transformedData;
};
