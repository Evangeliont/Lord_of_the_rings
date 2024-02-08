export interface QuoteApi {
  docs: QuoteApiElement[];
}

export interface QuoteApiElement {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
}

export interface QuoteCustom {
  docs: QuoteCustomElement[];
}

export interface QuoteCustomElement {
  id: string;
  dialog: string;
  movie: string;
  character: string;
}
