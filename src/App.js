import React, { useState } from "react";
import "./form/Form.css";
import FormSignup from "./form/FormSignup";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* this function will get the login user information from the local storage, if any present, otherwise it will return null. */
const getLocalStorage = () => {
  let name = localStorage.getItem("TOKEN");
  if (name) {
    return (name = JSON.parse(localStorage.getItem("TOKEN")));
  } else {
    return;
  }
};

function App() {
  // set state for the current login user
  const [user, setUser] = useState(getLocalStorage());

  /* handle logout function and clear all the localstorage data and set submit state to false and redirect to login page*/
  const logOut = () => {
    localStorage.clear();
    setIsSubmitted(false);
  };

  // setting up the state for submit form
  const [isSubmitted, setIsSubmitted] = useState(false);

  // changing the state of the submitForm
  function submitForm() {
    setIsSubmitted(true);
  }

  // this function will persist user to logged in when user reloads the page
  React.useEffect(() => {
    if (user) {
      setIsSubmitted(true);
    }
  }, [user]);

  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            // conditional rendering for the successfully logged in
            component={
              !isSubmitted
                ? () => <FormSignup submitForm={submitForm} />
                : () => <Dashboard logOut={logOut} user={user} />
            }
          />
          <Route path="*" component={FormSignup}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
