"use strict"
import axios from 'axios';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';

// REACT-ROUTER 4 CHANGES
//import {match, RouterContext} from 'react-router';
import {StaticRouter} from 'react-router-dom';
//import { renderToString } from 'react-router-server';

import {a11ySwitcher} from './src/stateControllers/reducers/index';
import Routes from './src/components/routes';

function handleRender(req, res){






            // STEP-1 CREATE A REDUX STORE ON THE SERVER
            const store = createStore(a11ySwitcher);

            // STEP-2 GET INITIAL STATE FROM THE STORE
            const initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
            // STEP-3 IMPLEMENT REACT-ROUTER ON THE SERVER TO INTERCEPT CLIENT REQUESTs AND DEFINE WHAT TO DO WITH THEM
            const context = {};

            const reactComponent = renderToString(
                <Provider store={store}>
                    <StaticRouter
                        location={req.url}
                        context={context}>
                        {Routes}
                    </StaticRouter>
                </Provider>
            );

            if (context.url) {
                // can use the `context.status` that
                // we added in RedirectWithStatus
                redirect(context.status, context.url)
            } else {
                res.status(200).render('index', {reactComponent, initialState})
            }

        // })
        // .catch(function(err){
        //     console.log('#Initial Server-side rendering error', err);
        // })
}

module.exports = handleRender