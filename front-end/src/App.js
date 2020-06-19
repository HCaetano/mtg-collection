import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import './css/App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
            <Route exact path="/" component={ Home }/>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
