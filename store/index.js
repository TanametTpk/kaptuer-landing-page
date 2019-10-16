import { createStore , applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const middleware = [thunk]

const initialState = {}

const store = createStore( 
    // persistedReducer, // FOR PERSIST_STORE
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export const makeStore = (initialState) => {

    const store = createStore( 
        // persistedReducer, // FOR PERSIST_STORE
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )

    return store
};