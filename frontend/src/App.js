import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import EditorPage from './pages/Editor';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Register} path="/signup" />
          <Route component={Profile} path="/profile" />
          <Route component={EditorPage} path="/editor/exercise/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
