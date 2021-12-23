import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import WelcomeScreen from "./Components/WelcomeScreen";
import PrivateRoute from "./Components/PrivateRoute";
import ClassList from "./Components/ClassList";
import ClassForm from './Components/ClassForm';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <h1>Anywhere Fitness</h1>
        {/* nav links */}
        <nav>
          <Link to="/">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav>

      </header>

      <Switch>
        <Route exact path="/">
          <WelcomeScreen />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/classlist">
          <ClassList />
        </Route>
        <PrivateRoute path='/newClass' element={<ClassForm />} />
      </Switch>
    </div>
  );
}

export default App;
