import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Route, Switch } from 'react-router-dom';
// import { withRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import Users from './components/Users';


/**
 * COMPONENT
 */
class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData();
//   }

  render() {
    //const { isLoggedIn } = this.props;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/user" component={Users} /> 
        </Switch>
      </div>
    );
  }
}

export default Routes
// /**
//  * CONTAINER
//  */
//  const mapState = (state) => {
//     return {
//       // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
//       // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
//       // isLoggedIn: !!state.auth.id,
//       isAdmin: !!state.auth.isAdmin,
//     };
//   };
  
//   const mapDispatch = (dispatch) => {
//     return {
//       loadInitialData() {
//         dispatch();
//       },
//     };
//   };
  
//   // The `withRouter` wrapper makes sure that updates are not blocked
//   // when the url changes
//   export default withRouter(connect(mapState, mapDispatch)(Routes));