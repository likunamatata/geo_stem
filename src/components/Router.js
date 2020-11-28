import React from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Mentorship from './Mentorship'
import Resources from './Resources'



function Router() {
  return (
    <div className="router">
      <Route exact path="/">
        <About
             
        />
      </Route>

      <Route exact path="/resources">
        <Resources
             
        />
      </Route>

      <Route exact path="/mentorship">
        <Mentorship
             
        />
      </Route>
      
    </div>

  );
}

export default Router;