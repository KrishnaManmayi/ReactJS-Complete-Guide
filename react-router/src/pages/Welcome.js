import React from "react";
import { Route } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>Welcome Page!</h1>
      <Route path="/welcome/new-user">
        <h3>Welcome, new user</h3>
      </Route>
    </div>
  );
}

export default Welcome;
