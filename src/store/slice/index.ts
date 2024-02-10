import { getDataOneApi } from "../services/getDataOneApi";
import user from "./userSlice";
import species from "./speciesSlice";
import auth from "./authSlice";

export default {
  user,
  species,
  auth,
  [getDataOneApi.reducerPath]: getDataOneApi.reducer,
};
