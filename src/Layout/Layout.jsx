import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery, gql } from "@apollo/client";

import './Layout.css';
import CardsPanel from '../Cards-Panel/CardsPanel';
import SubmissionPanel from '../Submission-Panel/SubmissionPanel';
import NavBarPanel from '../Nav-Bar-Panel/NavBarPanel';

const STUFFY_LIST = gql `
query{
  stuffies{
    stuffyName primaryColor secondaryColor
  }  
}`

export function Layout(){
  const [stuffyList, setStuffyList] = useState([])
  const [stuffyCheckedList, setStuffyCheckedList] = useState([])
  const [onCompleted, setOnCompleted] = useState(false)
  const [date, setDate] = useState();


  const {data, error, loading} = useQuery(STUFFY_LIST, {
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  })
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`;
  if(data && onCompleted === false){
    setStuffyList(data.stuffies)
    setOnCompleted(true)
  }

  return (
    data ?
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
              <NavBarPanel setDate={setDate} />
            </Col>
            <Row>
              <Col 
                className="cards-panel"
                md={{span:9}}
              >
                <CardsPanel 
                  stuffyList={stuffyList}
                  setStuffyCheckedList={(val)=>setStuffyCheckedList([...val])}
                />
              </Col>
              <Col 
                className="submission-panel"
                md={{span:3}}
              >
                <SubmissionPanel
                  stuffyCheckedList={stuffyCheckedList}
                  date={date}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    : null
  )
}

export default Layout