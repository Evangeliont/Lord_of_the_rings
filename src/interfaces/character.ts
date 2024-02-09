export interface Character {
  docs: CharacterData[];
  limit: number;
  page: number;
  pages: number;
}

export interface CharacterData {
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
  docs: CharacterCustomData[];
  limit: number;
  page: number;
  pages: number;
}

export interface CharacterCustomData {
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
  like: boolean;
}
