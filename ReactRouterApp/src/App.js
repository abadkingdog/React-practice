import React from 'react';
// import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Main from './Containers/Main';
import Page1 from './Containers/Page1';
import Page2 from './Containers/Page2';
import './App.css';

const App = () => {

    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main} />
        <Route path="page1" component={Page1} />
        <Route path="page2" component={Page2} />
      </Router>
    );

}

export default App;
