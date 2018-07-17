import React from 'react';
import { childrenWithProps } from '../utils/reactUtils'
//  transformandos eleementos do array em outra coisa
//  .map
/* {React.cloneElement(props.children, {...props})}  */
/* {React.Children.map(props.children, child => React.cloneElement(child, {...props})) } */

export default props => (
    <div>
        <h1>Familia</h1>
        { childrenWithProps(props.children,props)}
    
    </div>
)

