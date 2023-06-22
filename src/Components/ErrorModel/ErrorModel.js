import React from 'react'
import './ErrorModel.css'
// import Button from '../UI/Button'
import Card from '../UI/Card'
import Button from '../UI/Button'

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
            <Button type='reset' onClick={props.onClearMsg}>Okay</Button>
        </div>
    
</Card>
    </div>
  )
}

export default ErrorModel
