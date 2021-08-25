import React, {useState} from 'react'
import { Form, Card, Image } from 'react-bootstrap'
export function StuffyCard(props){

  function stuffyImage(stuffyName){
    try {
      return (require(`../images/${stuffyName}.png`).default)
    } catch (err) {
      return (require(`../images/Image_Not_Found.png`).default)
    }
  }

  const [isChecked, setIsChecked] = useState(false)

  function handleCardClick(event){
    handleNameClick(event)
    setIsChecked(!isChecked)
    props.isChecked([props.stuffyName, !isChecked, event])
  }

  function handleNameClick(event){
    console.log(event)
  }

  return(
    <>
      <Card
        border='secondary'
        bg='secondary' 
        style={{ width: '7rem' }}
        key={props.stuffyName}
        onClick={handleCardClick}
      >
        <Card.Img
          variant="top" 
          src={stuffyImage(props.stuffyName)}
        />
        <Card.Footer>

          <Form.Check
            type="checkbox"
            id={props.stuffyName}
            checked={isChecked}
            onChange={handleNameClick}
            label={props.stuffyName}
          />
        </Card.Footer>
      </Card>
    </>
  )


}