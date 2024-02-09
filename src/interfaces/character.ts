export interface Character {
  docs: CharacterData[];
  limit: number;
  page: number;
  pages: number;
}

export interface CharacterData {
  _id: string;
  race: string;
  gender: string;
  spouse: string;
  name: string;
  wikiUrl: string;
}
