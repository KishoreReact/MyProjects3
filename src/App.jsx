import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './common/header/Header';
import Navbar from './common/header/Navbar';
import Search from './common/header/Search';
import Head from './common/header/Head';
import Pages from './pages/pages';
import Home from './components/Mainpage/Home';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/> 
          <Route exact path="/signup" component={Login} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
