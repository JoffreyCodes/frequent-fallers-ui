import React, {useState} from 'react'
import { StuffyCard } from './StuffyCard' 
import { Row, Col } from 'react-bootstrap';

export function StuffyGrid(props){

  const stuffyNames = props.stuffyList.map((stuffy)=>stuffy.stuffyName);
  
  let initList = [];
  stuffyNames.forEach(stuffyName => [
    initList.push({
      stuffyName: stuffyName, 
      isChecked: false
    })  
  ])

  const [stuffyCheckedList, setStuffyCheckedList] = useState(initList)

  function handleCheck(event){
    let stuffyNameChecked = stuffyCheckedList
    stuffyNameChecked.forEach((stuffyCheck)=>{
      if (stuffyCheck.stuffyName === event[0])
        stuffyCheck.isChecked = event[1]
    })
    setStuffyCheckedList(stuffyNameChecked)
    props.setStuffyCheckedList(stuffyCheckedList)
  }

  return(
    <>
      <Row 
        className="stuffy-grid"
      >
        {props.stuffyList.map((stuffy)=>
          <Col 
            className="card-col"
            key={stuffy.stuffyName}>
            <StuffyCard 
              stuffyName={stuffy.stuffyName}
              isChecked={handleCheck}
              key={stuffy.stuffyName}
            />
          </Col>
        )}
      </Row>
    </>
  )
}

export default StuffyGrid