import React from 'react';
// REACT-ROUTER
import { Route, Switch} from 'react-router-dom';



import Home from './pages/Home'
import Contact from "./pages/Contact";

import {Header} from './layout/Header';
import {Footer} from "./layout/Footer";
import HomeWithErrors from './pages/HomeWithErrors';
import ContactWithErrors from "./pages/ContactWithErrors";


const Routes = (
    <div>


  <Switch>



      <Route path='/'  exact={true} component={HomeWithErrors} />
      <Route path='/Contact'  component={ContactWithErrors}/>
      <Route path='/mcardle/' exact={true} component={Home}/>
      <Route path='/mcardle/Contact'  component={Contact}/>


  </Switch>

        <Footer/>



    </div>
);


export default Routes;

