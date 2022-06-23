import React from 'react'
import DateContainer from './DateContainer'
import { Container, Row, Col } from 'react-bootstrap';

function NavBarPanel(props) {

  return (
    <>
      <Row>
        <Col>
          <DateContainer 
          date={props.date}
          setDate={props.setDate}
          userChecked={props.userChecked}
          />      
        </Col >
      </Row>
      

    </>
  )
}

export default NavBarPanel
