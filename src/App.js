import React from 'react';
import './App.css';
import CandidateCard from './CandidateCard';
import CandidateDetails from './CandidateDetails'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/candidate/:id">
            <CandidateDetails />
          </Route>
          <Route path="/">
            <CandidateCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
