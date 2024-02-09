export interface Quote {
  docs: QuoteData[];
}

export interface QuoteData {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
}

export interface QuoteCustom {
  docs: QuoteCustomData[];
}

export interface QuoteCustomData {
  id: string;
  dialog: string;
  movie: string;
  character: string;
}
