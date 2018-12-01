import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {a11ySwitcher} from './stateControllers/reducers/index'
import RoutesAndNav from './components/routes'
import {ShowAllAccessibility} from './stateControllers/actions/skiHillHeadingSwitcher'



const middleware =  applyMiddleware(logger, thunk);

const store = createStore(a11ySwitcher, middleware);



const App = (
        <Provider store={store}>
                <BrowserRouter>

                    {RoutesAndNav}
                </BrowserRouter>
        </Provider>
);

ReactDOM.render(
    App, document.getElementById('root')
);






