import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery, gql } from "@apollo/client";

import './Layout.css';
import CardsPanel from '../Cards-Panel/CardsPanel';
import SubmissionPanel from '../Submission-Panel/SubmissionPanel';
import NavBarPanel from '../Nav-Bar-Panel/NavBarPanel';
import { STUFFY_LIST } from '../utils/queries';

export function Layout(){
  const [stuffyList, setStuffyList] = useState([])
  const [stuffyCheckedList, setStuffyCheckedList] = useState([])
  const [onCompleted, setOnCompleted] = useState(false)
  const [date, setDate] = useState(new Date());

  console.log(stuffyCheckedList)

  let month, day, year;
  try{
    [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  }catch (err){
    [month, day, year] = [new Date().getMonth, new Date().getDate, new Date().getFullYear()];
  }
  
  var MONTH_NUMS = [];
  for (var i = 1; i <= 12; i++) {
    MONTH_NUMS.push(i);
  }
  const date_formatted = `"${MONTH_NUMS[month]}/${day}/${year}"`
  const prevSubs = useQuery(gql`query PriorSubmissions{
    priorSubmissions(date:${date_formatted}) {
      date stuffyName didFall
    }
  }`)
  const {data, error, loading} = useQuery(STUFFY_LIST)

  if (prevSubs.loading || loading) return "Loading..."
  if (prevSubs.error) return `Error! ${prevSubs.error.message}`;
  if (error) return `Error! ${error.message}`;

  if( data && onCompleted === false){
    
    console.log(`newData`)
  
    setStuffyList(data.stuffies)
    setOnCompleted(true)
  }
  if(prevSubs.data.priorSubmissions.length !== 0 && onCompleted === false){
    
    console.log(`prevData`)

    setStuffyList(prevSubs.data.priorSubmissions)
    setOnCompleted(true)
  }

  // console.log(`stuffyCheckedList: ${stuffyCheckedList.map((stuffyData)=>stuffyData)}`)
  // console.log(`stuffyList: ${stuffyList}`)
  
  return (
    prevSubs.data?
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
                setOnCompleted={setOnCompleted} 
              />
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