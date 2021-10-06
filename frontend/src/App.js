import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import EditorPage from './components/Editor';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Register} path="/signup" />
          <Route component={Profile} path="/profile" />
          <Route component={EditorPage} path="/editor" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
