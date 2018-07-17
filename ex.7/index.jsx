import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

//Estaciando tags Family com member
ReactDOM.render(
  <Family>
    <Member name="Amauri" lastName="Souza" />
  </Family>,
  document.getElementById('app')
);
