import React from 'react';
// REACT-ROUTER
import { Route, Switch} from 'react-router-dom';






import Header from './layout/Header';
import {Footer} from "./layout/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import HeyPage from "./pages/HeyPage";
import ExhibitPage from "./pages/ExhibitsPage";
import AddNewExhibitPage from "./pages/AddNewExhibitPage";



const test = (
    <div>
        why wont it work, i really dont know
    </div>
)


const Routes = (
    <div>

        <Header/>


  <Switch>



      <Route path='/' exact={true}  component={HomePage} />
      <Route path='/login' component={LoginPage} />

      <Route path='/rooms' component={HomePage} />
      <Route path='/exhibits' exact={true} component={ExhibitPage} />
      <Route path='/exhibits/newexhibit' component={AddNewExhibitPage} />
      <Route path='/floors' component={HomePage} />
      <Route path='/users' component={HomePage} />





  </Switch>



        <Footer />





    </div>
);


export default Routes;

