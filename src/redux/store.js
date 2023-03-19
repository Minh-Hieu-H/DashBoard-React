import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import ThemeReducer from "./reducers/ThemeReducer";
import {videoListReducer} from "./reducers/VideoReducer"



const rootReducer = combineReducers(
    {theme:ThemeReducer,
     videoList: videoListReducer,
    })

const middleware = [thunk]
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;