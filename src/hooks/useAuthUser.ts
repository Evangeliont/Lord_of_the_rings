import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

export const useAuthUser = () => {
  const { username, email, password } = useAppSelector(
    (state: RootState) => state.user
  );

  return { username, email, password };
};
