import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/main.scss';

import {
  Header, Footer, Dashboard, Expense,
} from './components/index';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <div className="main">
        <Switch>
          {/* use exact path for "/" otherwise it will match every path containing "/" */}
          <Route exact path="/" component={Dashboard} />
          <Route path="/add-expense" component={Expense} />

        </Switch>
      </div>

      <Footer />
    </Router>
  </div>
);

export default App;
