import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Records from './pages/Records';
import NewAccount from './pages/NewAccount';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('@bills/user');
  let logged = false;
  if (user) {
    const { token } = JSON.parse(user);
    if (token) logged = true;
  }
  return (
    <Route
      {...rest}
      render={props =>
        logged ? (
          <>
            <Header />
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

const AuthRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('@bills/user');
  let logged = false;
  if (user) {
    const { token } = JSON.parse(user);
    if (token) logged = true;
  }
  return (
    <Route
      {...rest}
      render={props =>
        !logged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/home', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <AuthRoute path="/" exact component={Login} />
      <AuthRoute path="/new-account" component={NewAccount} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/record" component={Records} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
