import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classCompoment'

//Estaciando tags Family com member
ReactDOM.render(
  <ClassComponent label="Contador" initialValue={10}/>,
  document.getElementById('app')
);
