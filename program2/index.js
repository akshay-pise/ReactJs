import React from 'react';
import ReactDOM from 'react-dom';
const fname="akshay";
const cdate=new Date().toLocaleDateString();
const ctime=new Date().toLocaleDateString();
ReactDOM.render(
  <>
  <h1> Hello my is name is {fname}</h1>
  <p> Current date is = {cdate}</p>
  <p>And current time is = {ctime}</p>
  </>,
  document.getElementById('root')
);