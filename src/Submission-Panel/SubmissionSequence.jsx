import React, {useState} from 'react'
import {Container, Button} from 'react-bootstrap'

function SubmissionSequence(props) {
  const [preConfirmed, setPreConfirmed] = useState(false)
  
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  let message;
  let validDate
  try{
    const dateNum= props.date.getDay()
    validDate = true
    message=(`Confirm submission for ${weekdays[dateNum]}?`)
  }catch (err){
    validDate = false
    message="Must select a date before submitting"
  }

  function userPreconfirm(){
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

  function UserConfirmed(){
    if (preConfirmed && validDate){
      return (
        <>
        <Button 
          variant="success"
        > 
          yes 
        </Button>
        {' '}
        <Button 
          variant="outline-danger"
          onClick={(()=>setPreConfirmed(false))}
        > 
          no 
        </Button>
      </>
      )
    } else {
      return (userPreconfirm())
    }      
  }

  return (
    <Container className='pre-submit-button'>
      <UserConfirmed />
    </Container>
  )
}

export default SubmissionSequence
