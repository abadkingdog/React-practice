import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React. Confirm Navigation</h2>
        </div>
        <div className="App-content">
          <Link to="/page1">Page 1</Link><br />
          <Link to="/page2">Page 2</Link>
        </div>
      </div>
    );
  }
}
