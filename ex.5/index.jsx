import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(    
    <Family lastName='Silva'>
        <Member name="Constantine" age="18" />
        <Member name="James" age="45" />
        <Member name="Judith" age="10" />
    </Family>
, document.getElementById('app'))