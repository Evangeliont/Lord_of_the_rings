export interface CharacterApi {
  docs: CharacterApiElement[];
}

export interface CharacterApiElement {
  _id: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}

export interface CharacterCustom {
  docs: CharacterCustomElement[];
}

export interface CharacterCustomElement {
  id: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}
