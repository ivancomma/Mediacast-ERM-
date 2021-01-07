import React, {Suspense} from 'react';
import { createBrowserHistory} from "history";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './views/Home/Home.js';
import Exam from './views/Exam/Exam.js';
var hist = createBrowserHistory();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/first" component={Exam}/>
        <Route path = "/screen" component={Exam}/>
      </Switch>
    </Router>
  );
}

export default App;
