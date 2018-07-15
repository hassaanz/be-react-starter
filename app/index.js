import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Routes from './Routes';
import App from './containers/App';

const Home = () => (
  <div>
    Home
  </div>
);

const About = () => (
  <div>
    About
  </div>
);

const Main = () => {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("index"));
