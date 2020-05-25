import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { chatReducer } from './chat/reducers'

export const rootReducer = combineReducers({
    chat: chatReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>