import React from "react";
import { Route, Switch } from "wouter";
import Home from './views/Home'
import MyPoke from './views/MyPokes'

const RouterViews= () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/mypoke" component={MyPoke} />
    </Switch>
  </div>
);


export default RouterViews