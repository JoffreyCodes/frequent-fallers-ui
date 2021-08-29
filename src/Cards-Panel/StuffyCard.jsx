import React, {useState} from 'react'
import { Form, Card } from 'react-bootstrap'
export function StuffyCard(props){

  function stuffyImage(stuffyName){
    try {
      return (require(`../images/${stuffyName}.png`).default)
    } catch (err) {
      return (require(`../images/Image_Not_Found.png`).default)
    }
  }

  const [isChecked, setIsChecked] = useState(props.didFall)

  function handleCardClick(event){
    setIsChecked(!isChecked)
    props.isChecked([props.stuffyName, !isChecked, event])
  }

  return(
    <>
      <Card
        border='secondary'
        bg='secondary' 
        style={{ width: '30vw' }}
        key={props.stuffyName}
        onClick={handleCardClick}
      >
        <Card.Img
          variant="top" 
          src={stuffyImage(props.stuffyName)}
        />
        <Card.Footer>
          <Form>
            <Form.Check
              className='stuffyCheck'
              type="checkbox"
              id={props.stuffyName}
              checked={ isChecked }
              onChange={(e)=> null}
            />
          </Form>
        </Card.Footer>
      </Card>
    </>
  )


}