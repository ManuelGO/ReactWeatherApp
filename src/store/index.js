import { createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Buenos Aires'
};

export const store = createStore(
        reducers, 
        initialState,
        compose(
            applyMiddleware(thunk,),
            window.devToolsExtension ? window.devToolsExtension() : f => f
          )
        );


//sin middleware
// export const store = createStore(city, initialState,
//                 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
