import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

//Estaciando tags Family com member
ReactDOM.render(
  <Family lastName="Souza">
    <Member name="Amauri"/>
    <Member name="Rafa"/>
    <Member name="Toy"/>
  </Family>,
  document.getElementById('app')
);
