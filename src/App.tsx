import './App.css';
import Header from"./components/header"
import MainTop from"./components/mainTop"
import Explore from"./components/explore"
import Footer from"./components/footer"
import Destinations from"./components/fDestinations"
import About from"./components/about"
import Partner from"./components/Partner"


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <Router>
      <header className="App-header">
      
      <Header/>
      <MainTop/>
      <Switch>
      <Route path="/" exact component={Explore} />       
      <Route path="/Destinations" component={Destinations} />
      <Route path="/About" component={About} />
      <Route path="/Partner" component={Partner} />

      </Switch>
      <Footer/>
      </header>
    
    </Router>
  );
}

export default App;
