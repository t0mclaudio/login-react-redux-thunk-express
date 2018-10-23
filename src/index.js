import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore }  from 'redux';
import { Provider } from "react-redux";

const store = createStore();

const Application = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'));
