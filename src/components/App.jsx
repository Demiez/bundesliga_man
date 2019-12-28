import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './common/Header';
import AboutPage from './AboutPage/AboutPage';
import Page404 from './PageNotFound';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
