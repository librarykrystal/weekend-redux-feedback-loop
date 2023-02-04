import React from 'react';
import axios from 'axios';
import './App.css';
// Added imports:
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Submitted from "../Submitted/Submitted";


function App() {

// VARIABLES FOR SHOWING VALUES ON HEADER DURING BUILDING/TESTING:
  const feels = useSelector(store => store.feelingR);
  const understands = useSelector(store => store.understandingR);
  const sups = useSelector(store => store.supportR);

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback</h1>
          <h4 className='Forget-it'>Don't forget it</h4>

{/* LINKS FOR USE DURING BUILDING/TESTING: */}
          <Link to="/">Feeling</Link> {feels} <br />
          <Link to="/understanding">Understanding</Link> {understands} <br />
          <Link to="/support">Support</Link> {sups} <br />
          <Link to="/comments">Comments</Link> <br />
          <Link to="/review">Review</Link> <br />
          <Link to="/submitted">Submitted</Link> <br />
        </header>

        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/submitted">
          <Submitted />
        </Route>
      </div>
    </Router>
  );
}

export default App;
