import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navi from '../navi/Navi'
import Dashboard from './Dashboard';
import {Switch,Route} from 'react-router-dom'
import FavouriteList from '../favourite/FavouriteList';
function App() {
  return (
    <div>
     <Navi/>
       <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/favourites' exact component={FavouriteList} />
        </Switch>
    </div>
  );
}

export default App;
