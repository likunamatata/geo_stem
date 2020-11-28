import './App.css';
import React from 'react'
import { withRouter } from 'react-router-dom'
import Router from './components/Router'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>

    </div>
  );
}

export default withRouter(App);
