import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Rituals from "./Rituals/rituals";





function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/login" component={Login} />
      <Route  path="/register" component={Register} />
      <Route  path="/rituals" component={Rituals} />

     

      

    </Switch>
  );
}

export default Routes;
