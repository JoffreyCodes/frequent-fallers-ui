import React, {useState} from 'react'
import {Container, Button, Alert} from 'react-bootstrap'
import { date_formatter } from '../utils/DateFormatter'

import HandleUpdateSubmit from './HandleUpdateSubmit'

function SubmissionSequence(props) {
  const [preConfirmed, setPreConfirmed] = useState(false)
  const [success, setSuccess] = useState(false)

  let message;
  let validDate
  try{
    validDate = true
    message=(`Update ${date_formatter(props.date)} Submission?`)
  }catch (err){
    validDate = false
    message="Must select a date before submitting"
  }
  function userPreConfirm(){
    return(
      validDate ?
        <Button 
          variant="outline-warning"
          onClick={()=>setPreConfirmed(true)}
        >
          {message}
        </Button>
      : <Button 
          variant="secondary"
          disabled
        >
          {message}
        </Button>)
  }

  function handleSuccessClick(){
    HandleUpdateSubmit(props.date, props.updateSubList)
    setSuccess(true)
  }

  function UserConfirmed(){
    if (preConfirmed && validDate){
      return (
        <>
        <Button 
          variant="success"
          onClick={()=>handleSuccessClick()}
        > 
          Submit 
        </Button>
        {' '}
        <Button 
          variant="outline-danger"
          onClick={(()=>setPreConfirmed(false))}
        > 
          Back 
        </Button>
      </>
      )
    } else {
      return (userPreConfirm())
    }      
  }

  return (
    <Container className='pre-submit-button'>
      {success
        ? <Alert 
            variant='success'> Submission Successful</Alert>
        :<UserConfirmed />
      }
    </Container>
  )
}

export default SubmissionSequence
