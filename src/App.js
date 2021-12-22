<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import ClassList from './components/ClassList';
=======
import "./App.css";
import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import WelcomeScreen from "./Components/WelcomeScreen";
import { Link, Route, Switch } from "react-router-dom";
>>>>>>> origin/main

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/classlist' element={<ClassList />} />
      </Routes>
=======
      {/* header */}
      <header className="App-header">
        <h1>Anywhere Fitness</h1>
        {/* nav links */}
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav>
        {/* routes */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </header>

      <Switch>
        <Route exact path='/'>
          <WelcomeScreen />
        </Route>
      </Switch>
>>>>>>> origin/main
    </div>
  );
}

export default App;