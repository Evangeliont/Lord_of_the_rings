import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { authorizedUser } from "../store/slices/userSlice";
import { getAuthLS } from "../utils/saveDataUser";

export const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const emailLS = getAuthLS();

  useEffect(() => {
    if (emailLS) {
      dispatch(authorizedUser(emailLS));
    }
  }, []);
};
