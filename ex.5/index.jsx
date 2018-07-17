import React from 'react'
import ReactDOM from 'react-dom'
//importando o componente padrao
import Primeiro, { Segundo } from './component'


//Renderizando minha div, estanciando a tag e passando seu parametro
ReactDOM.render(
    //tag div agrupando os componentes 
    <div>
        <Primeiro/>
        <Segundo/>
    </div>,
 document.getElementById('app')) 


