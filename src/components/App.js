import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import PrivateRouteMain from "./PrivateRouteMain";
import PrivateRouteAccount from "./PrivateRouteAccount";
import { AuthProvider } from "../contexts/AuthContext";
import { HashRouter as Router, Switch } from "react-router-dom";
import Summary from "./Summary";

function App() {
  //meaningless comment test

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRouteMain path="/" exact component={Dashboard} />
          <PrivateRouteAccount path="/signin" exact component={SignIn} />
          <PrivateRouteAccount path="/signup" exact component={SignUp} />
          <PrivateRouteMain path="/summary" exact component={Summary} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
