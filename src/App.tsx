import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/main.scss';

import { Header, Footer, Dashboard } from './components/index';

const App = () => (
  <div className="App">
    <Header />

    <div className="main">
      <Router>
        <Switch>
          {/* use exact path for "/" otherwise it will match every path containing "/" */}
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>

    <Footer />
  </div>
);

export default App;
