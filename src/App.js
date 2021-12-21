import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ClassList from './components/ClassList';
import { ProvideAuth } from './components/PrivateRoute';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  return (
    <div className="App">
      <Fragment>
        <ProvideAuth>
          <Routes>
            <Route path='/' element={<WelcomeScreen />} />
            <Route path='/classlist' element={<ClassList />} />
          </Routes>
        </ProvideAuth>
      </Fragment>
    </div>
  );
}

export default App;
