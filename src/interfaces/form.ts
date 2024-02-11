export interface FormRegistrasion {
  email: string;
  password?: string;
}

export interface FormAuthorisation {
  email: string;
  password?: string;
}

export interface FormReset {
  email: string;
}

export type Forms = FormRegistrasion | FormAuthorisation | FormReset;
