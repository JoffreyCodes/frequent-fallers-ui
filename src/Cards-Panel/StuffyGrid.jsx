import React, {useState} from 'react'
import { StuffyCard } from './StuffyCard' 
import { Row, Col,Form } from 'react-bootstrap';

export function StuffyGrid(props){
  const stuffyData = props.stuffyList.map((stuffy)=>stuffy);

  // const stuffyNames = props.stuffyList.map((stuffy)=>stuffy.stuffyName);
  // let initList = [];  
  //   stuffyNames.forEach(stuffyName => [
  //     initList.push({
  //       stuffyName: stuffyName, 
  //       isChecked: false
  //     })  
  //   ])

  let initList = [];  
  stuffyData.forEach(stuffy => [
      initList.push({
        stuffyName: stuffy.stuffyName, 
        isChecked: ((stuffy.didFall)===undefined)? false: stuffy.didFall
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
        {stuffyData.map((stuffy)=>
          <Col 
            className="card-col"
            key={stuffy.stuffyName}>

              <StuffyCard 
                stuffyName={stuffy.stuffyName}
                didFall={((stuffy.didFall)===undefined)? false: stuffy.didFall}
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