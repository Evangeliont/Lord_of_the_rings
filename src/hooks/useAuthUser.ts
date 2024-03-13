import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { authorizedUser } from "../store/slices/userSlice";
import { getAuthLS } from "../utils/saveDataUser";

export const useAuthUser = () => {
  const dispatch = useAppDispatch();
  const emailLS = getAuthLS();

  console.log(emailLS);

  useEffect(() => {
    if (emailLS) {
      dispatch(authorizedUser(emailLS));
    }
  }, []);
};
