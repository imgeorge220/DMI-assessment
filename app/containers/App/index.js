/**
 *
 * App.js
 *
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Words from 'containers/Words/Loadable';
import AddWord from 'containers/AddWord/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'components/NavBar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Words} />
        <Route exact path="/add" component={AddWord} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
