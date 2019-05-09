import React from 'react';
// REACT-ROUTER
import { Route, Switch} from 'react-router-dom';
import RoomsPage from './pages/RoomsPage'
import Header from './layout/Header';
import {Footer} from "./layout/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import HeyPage from "./pages/HeyPage";
import ExhibitPage from "./pages/ExhibitsPage";
import AddNewExhibitPage from "./pages/AddNewExhibitPage";
import EditExhibitPage from "./pages/EditExhibitPage";
import NewRoomPage from "./pages/newRoomPage";
import EditRoomPage from "./pages/EditRoomPage";



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

      <Route path='/rooms' exact={true} component={RoomsPage} />
      <Route path={'/rooms/newroom'} exact={true} component={NewRoomPage}/>
      <Route path={'/rooms/:id'} component={EditRoomPage} />


      <Route path='/exhibits' exact={true} component={ExhibitPage} />
      <Route path='/exhibits/newexhibit' component={AddNewExhibitPage} />
      <Route path='/floors' component={HomePage} />
      <Route path='/users' component={HomePage} />

      <Route path={'/editexhibit/:id'} component={EditExhibitPage} />





  </Switch>



        <Footer />





    </div>
);


export default Routes;

