import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import './Layout.css';
import CardsPanel from '../Cards-Panel/CardsPanel';
import SubmissionPanel from '../Submission-Panel/SubmissionPanel';
import NavBarPanel from '../Nav-Bar-Panel/NavBarPanel';

export function Layout(){
  const [date, setDate] = useState(new Date());
  const [toSubmissionComponent, setToSubmissionComponent] = useState()
  const [initStuffyData, setInitStuffyData] = useState()
  const [userChecked, setUserChecked] = useState(false)
  
  return (
      <Container fluid className="app-container">
        <Row>
          <Col 
            className="app-wrapper"
            md={{offset:0, span:12}}
          >
            <Col 
              className="nav-bar"
              md={{span:12}}
            >
              <NavBarPanel
                date={date}
                setDate={setDate}
                userChecked={userChecked}
              />
            </Col>
            <Row>
              <Col 
                className="cards-panel"
                md={{span:9}}
              >
                <CardsPanel
                  date={date}
                  setToSubmissionComponent={setToSubmissionComponent}
                  setInitStuffyData={setInitStuffyData}
                  setUserChecked={setUserChecked}
                />
              </Col>
              <Col 
                className="submission-panel"
                md={{span:3}}
              >
                <SubmissionPanel
                  date={date}
                  toSubmissionComponent={toSubmissionComponent}
                  initStuffyData={initStuffyData}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}

export default Layout