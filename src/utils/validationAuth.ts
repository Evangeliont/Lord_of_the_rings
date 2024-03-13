import { getParseItemsLS } from "./saveDataUser";

interface AuthUser {
  email: string;
  password: string;
}

export const addUserLS = (
  username: string | undefined,
  email: string,
  password: string | undefined
) => {
  if (email) {
    localStorage.setItem(
      email,
      JSON.stringify({
        username: username,
        email: email,
        password: password,
      })
    );
  }
};

export interface LSData {
  username: string;
  password: string;
  email: string;
}

export const checkAuthentication = (data: AuthUser) => {
  let isAuth: boolean;
  let pass: string;
  const user = getParseItemsLS(data.email);
  if (user) {
    pass = user.password;
    isAuth = pass === data.password;
    return isAuth;
  }
  return false;
};
