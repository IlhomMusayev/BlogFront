import React from 'react';
import Navbat from './Components/Navbar'
import Home from './Components/Home'
import Create from './Components/Create'
import Blogs from './Components/blog'
import NotFound from './Components/NotFound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <>
      <Router>
          <Navbat />
          <div className = 'content container'>
            <Switch>
              <Route exact path = '/'>
                <Home />  
              </Route>
              <Route path = '/create'>
                <Create />  
              </Route> 
              <Route path = '/blogs/:id'>
                <Blogs />  
              </Route>
              <Route path = '*'>
                <NotFound />  
              </Route>
            </Switch>
          </div>
      </Router>
    </>
    
    ) 
}

export default App;
