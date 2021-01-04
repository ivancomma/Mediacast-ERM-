import React, {Suspense} from 'react';
import { createBrowserHistory} from "history";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './views/Home/Home.js';
import Next from './views/Next/Next.js';
var hist = createBrowserHistory();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/first" component={Next}/>
        <Route path = "/screen" component={Next}/>
      </Switch>
    </Router>
  );
}

export default App;
