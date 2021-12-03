import React from "react";
import useToken from './hooks/useToken';
import HomePage from "./pages/HomePage";
import Signin from "./pages/Signin";

function App() {

  const [token] = useToken()

  return (
    <>
      {token ? (
        <HomePage />
      ) : <Signin />}
    </>
  )
}

export default App;
