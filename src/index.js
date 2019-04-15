import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {indexReducer} from "./stateControllers/reducers";
import Routes from "./components/routes";


const middleware =  applyMiddleware(logger, thunk);

const store = createStore(indexReducer, middleware);



const App = (
        <Provider store={store}>
                <BrowserRouter>

                    {Routes}

                </BrowserRouter>
        </Provider>
);

ReactDOM.hydrate(
    App, document.getElementById('root')
);






