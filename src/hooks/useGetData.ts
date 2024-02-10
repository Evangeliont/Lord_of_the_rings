// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";

// export function useGetData() {
//   const data = useSelector<RootState, IUserData>((state) => state.user.data);
//   const loading = useSelector<RootState, boolean>(
//     (state) => state.user.loading
//   );
//   const token = useSelector<RootState, TypeToken>((state) => state.token);
//   const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

//   React.useEffect(() => {
//     dispatch(userRequestAsync());
//   }, [token, dispatch]);

//   return {
//     loading,
//     data,
//   };
// }
