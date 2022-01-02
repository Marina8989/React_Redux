import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import contactReducer from "./redux/reducers/contactReducer";

const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
document.getElementById('root'));