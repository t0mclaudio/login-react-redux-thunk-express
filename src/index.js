import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore }  from 'redux';

const store = createStore();

const Application = () => {
  return (
  <div>
    <App />
  </div>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'));
