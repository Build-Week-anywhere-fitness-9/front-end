import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// add applyMiddleware import to redux for async calls
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
// import thunk from 'redux-thunk';
import './index.css';
import App from './App';

//add applyMiddleware(thunk) as second argument
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
