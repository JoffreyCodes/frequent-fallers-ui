import React, {useState, useEffect} from 'react'
import { Form, Card } from 'react-bootstrap'

export function StuffyCard(props){
  const {stuffyName, didFall} = props.stuffyData
  const [isChecked, setIsChecked] = useState(didFall)
  
  function stuffyImage(stuffyName){
    try {
      return (require(`../images/${stuffyName}.png`).default)
    } catch (err) {
      return (require(`../images/Image_Not_Found.png`).default)
    }
  }

  function handleCardClick(){
    setIsChecked(!isChecked)
    props.setSubmissionList({
      'stuffyName': stuffyName,
      'checked': !isChecked
    })
  }

  useEffect(()=>{
    setIsChecked(didFall)
  },[didFall])

  return(
    <>
      <Card
        border='secondary'
        bg='secondary' 
        style={{ width: '30vw' }}
        key={stuffyName}
        onClick={handleCardClick}
      >
        <Card.Img
          variant="top" 
          src={stuffyImage(stuffyName)}
        />
        <Card.Footer>
          <Form>
            <Form.Check
              className='stuffyCheck'
              type="checkbox"
              id={stuffyName}
              checked={isChecked}
              onChange={(e)=> setIsChecked(!isChecked)}
            />
          </Form>
        </Card.Footer>
      </Card>
    </>
  )
}

export default StuffyCard