import React from "react";
import App from "../App";
import Admin from "../auth/admin";
import Login from "../auth/Login";
import { Route, Redirect, Switch } from "react-router-dom";
import Auth from "../auth/auth";
import Post from "../Posts";

export default function LayOut() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/blog'>
          <Post />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route
          path='/admin'
          render={() =>
            new Auth().isAuthenticate() ? <Admin /> : <Redirect to='/login' />
          }
        />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </>
  );
}
