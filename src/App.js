import React from "react";
import useToken from './hooks/useToken';
import HomePage from "./pages/HomePage";
import Signin from "./pages/Signin";
import {Route, Switch, Redirect} from "react-router-dom"

function App() {

  const [token] = useToken()

  return (
    <>
      <Switch>
        <Route exact path="/signin">
          {token ? <Redirect to="/" /> : <Signin />}
        </Route>
        <Route path="/">
          {token ? <HomePage /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </>
  )
}

export default App;
