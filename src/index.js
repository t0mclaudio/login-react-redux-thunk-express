import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore }  from 'redux';
import { Provider } from "react-redux";

const initialState = {
  username: "",
  password: "",
  keepLoggedIn: false,
  isAuthenticated: false
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case "CHANGE":
      if (action.name=="keepLoggedIn") {
        return {...state, [action.name]:!state.keepLoggedIn}
      }
      return {...state, [action.name]:action.value}
    default:
      return state;
  }
  return state;
}

const store = createStore(reducer);

const Application = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'));
