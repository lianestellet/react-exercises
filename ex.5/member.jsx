import React from 'react'

export default props => (
    <div> {props.name} <strong> {props.lastName} </strong> <i>{props.age}</i> <div>{props.age >= 18? 'Posso beber' : 'sou muito novo'}</div><br/></div>
    
)