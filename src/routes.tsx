import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Login } from "./pages/Login";
import { App } from "./App";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  )
}