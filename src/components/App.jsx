import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './common/Header';
import BasicInfoPage from './BasicInfoPage/BasicInfoPage';
import ManagerPanelPage from './ManagerPanelPage/ManagerPanelPage';
import AboutPage from './AboutPage/AboutPage';
import Page404 from './PageNotFound';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/basicinfo" component={BasicInfoPage} />
        <Route path="/managerpanel" component={ManagerPanelPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
