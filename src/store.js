import { appReducer} from "./reducer";
import { createStore } from 'redux'
import { arrButton } from './constArr/arrButton';

export const store = createStore(appReducer)



