import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (window.localStorage.getItem("todos") === null && window.localStorage.getItem("didView") !== "true") {
    window.localStorage.setItem("didView", "true")
    window.localStorage.setItem("todos", 
    JSON.stringify([{id:0, text:"Vacuum"}, {id:1, text:"Take out the trash"}]))
}
/* This puts some preset issues into localStorage. This happens only the first time the site is loaded, if the user deletes those preset issues the didView property will block injecting them again. */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
