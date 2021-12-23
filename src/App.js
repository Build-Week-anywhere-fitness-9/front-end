import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import WelcomeScreen from "./Components/WelcomeScreen";
import ClassList from './Components/ClassList';
import ClassForm from './Components/ClassForm';
import ErrorScreen from './Components/Error';
import LoadingScreen from './Components/Loading';

function App({error, isFetching}) {
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
        {error !== '' &&
          <Route path='/error'>
            <ErrorScreen />
          </Route>
        }
        {isFetching === true &&
          <Route path='/loading'>
            <LoadingScreen />
          </Route>
        }
        <Route exact path='/'>
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
};

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(App);
