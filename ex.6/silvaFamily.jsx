import React from 'react'
import Member from './member'

export default props => (
    <div>
    <Member name={props.value} lastName="Souza"/>
    <Member name="Amauri" lastName="Souza"/>
    <Member name="Amauri" lastName="Souza"/>
    <Member name="Amauri" lastName="Souza"/>
    </div>
)