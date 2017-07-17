import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';

export default class Page2 extends React.Component {
  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  }

  routerWillLeave(nextLocation) {
    // // return false to prevent a transition w/o prompting the user,
    // // or return a string to allow the user to decide:
    // // return `null` or nothing to let other hooks to be executed
    // //
    // // NOTE: if you return true, other hooks will not be executed!
    // if (!this.state.isSaved)
      return 'Your work is not saved! Are you sure you want to leave?'
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Link to="/">Home</Link><br />
        <Link to="/page1">Page 1</Link><br />
        <Link to="/page2">Page 2</Link>
        <p className="App-intro">
          What's wrong with you?
        </p>
      </div>
    );
  }
}
