import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './board/Board';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Board} />
      </Switch>
    </Router>
  );
}
