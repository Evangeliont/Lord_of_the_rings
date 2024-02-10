/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-console */
import { type Middleware } from "@reduxjs/toolkit";
import { isAction } from "@reduxjs/toolkit";

import { RootState } from "../store/store";

const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (isAction(action)) {
      if (!action.type) {
        return next(action);
      }

      console.log("type", action.type);
      console.log("currentState", store.getState());
    }

    next(action);

    console.log("next state: ", store.getState());
  };
export default loggerMiddleware;
