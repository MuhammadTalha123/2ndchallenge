import React from 'react';
import ReactDom from 'react-dom';

const myName = 'Talha Bajwa';

var today = new Date();

var date = today.toLocaleDateString();

var time = today.toLocaleTimeString();

ReactDom.render(
  <>
  <h1>{`My name is ${myName}.`}</h1>
  <p>{`Curren Date Is ${date}`}</p>
  <p>{`Curren Time Is ${time}`}</p>
  </>,
  document.getElementById('root')
);