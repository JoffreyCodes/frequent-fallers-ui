import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery, gql } from "@apollo/client";

import './Layout.css';
import CardsContainer from '../Cards-Panel/CardsContainer';
import SubmissionContainer from '../Submission-Panel/SubmissionContainer';

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
              Nav
            </Col>
            <Row>
              <Col 
                className="cards-panel"
                md={{span:9}}
              >
                <CardsContainer 
                  stuffyList={stuffyList}
                  setStuffyCheckedList={(val)=>setStuffyCheckedList([...val])}
                />
              </Col>
              <Col 
                className="submission-panel"
                md={{span:3}}
              >
                <SubmissionContainer
                  stuffyCheckedList={stuffyCheckedList}
                />
              </Col>
            </Row>
            <Col 
              className="footer"
              md={{span:12}}
            >
              footer
            </Col>
          </Col>
        </Row>
      </Container>
    : null
  )
}

export default Layout