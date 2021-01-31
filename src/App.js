import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { NavigationBar } from './components/NavigationBar';

import { HomeView } from './views/HomeView';
import { ProgrammingView } from './views/ProgrammingView';
import { MathsView } from './views/MathsView';
import { StoriesView } from './views/StoriesView';
import { AboutView } from './views/AboutView';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavigationBar/>
        </nav>
        <Switch>
          <Route path="/programming">
            <ProgrammingView/>
          </Route>
          <Route path="/maths">
            <MathsView/>
          </Route>
          <Route path="/stories">
            <StoriesView/>
          </Route>
          <Route path="/about">
            <AboutView/>
          </Route>
          <Route path="/">
            <HomeView/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
