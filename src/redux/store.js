import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import ThemeReducer from "./reducers/ThemeReducer";
import {videoListReducer,videoDetailsReducer} from "./reducers/VideoReducer"
import { tagListReducer,tagDetailsReducer,tagCreateReducer } from "./reducers/TagReducer";


const rootReducer = combineReducers(
    {theme:ThemeReducer,
     videoList: videoListReducer,
     videoDetails: videoDetailsReducer,
     tagList:tagListReducer,
     tagDetails:tagDetailsReducer,
     tagCreate:tagCreateReducer

    })

const middleware = [thunk]
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;