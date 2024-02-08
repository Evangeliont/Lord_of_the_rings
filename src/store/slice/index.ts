import { ringsAPI } from '../services/RingsService';
import auth from './auth';
import speciesSlice from './speciesSlice';
import interfaceСhange from './interfaceСhange'

export default {
    auth,
    speciesSlice,
    interfaceСhange,
    [ringsAPI.reducerPath]: ringsAPI.reducer
}