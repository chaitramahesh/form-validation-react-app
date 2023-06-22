import React from 'react'
import './ErrorModel.css'
// import Button from '../UI/Button'
import Card from '../UI/Card'

const ErrorModel = (props) => {
  return (
    <div className="backdrop">
    <Card className="modal">

        <div className="header">
            <h2>Invalid Input</h2>
        </div>
        <div className="content">
            <p>{props.errorMessage}</p>
        </div>
        <div className="actions">
            <button type='reset' className='button' onClick={props.onClearMsg}>Okay</button>
        </div>
    
</Card>
    </div>
  )
}

export default ErrorModel
