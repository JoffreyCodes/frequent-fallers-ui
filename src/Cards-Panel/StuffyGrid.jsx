import React, {useState} from 'react'
import { StuffyCard } from './StuffyCard' 
import { Row, Col } from 'react-bootstrap';
import { STUFFY_LIST, PRIOR_SUBMISSIONS } from '../utils/queries';
import { useQuery } from "@apollo/client";

export function StuffyGrid(props){
  const [newEntryList, setNewEntryList] = useState([])
  const [prevEntryList, setPrevEntryList] = useState([]) 
  const [stuffyDataReady, setStuffyDataReady] = useState(false)

  const {error: ERROR, loading: LOADING} = useQuery(PRIOR_SUBMISSIONS, {
    variables: { date: props.date },
    onCompleted: (data) => getStuffyDataReady(data.priorSubmissions, 'priorSubs') 
  })

  const {error, loading} = useQuery(STUFFY_LIST, {
    onCompleted: (data) => getStuffyDataReady(data.stuffies, 'stuffyList'),
  })

  function getStuffyDataReady(data, arg){
    if(arg==='priorSubs') setPrevEntryList(data)
    if(arg==='stuffyList') setNewEntryList(data)
    setStuffyDataReady(true)
  }

  let initList = [];
  newEntryList.forEach(stuffyData =>[
    initList.push({
      stuffyName: stuffyData.stuffyName,
      didFall: false
    })
  ])
  
  let stuffyData;
  if(prevEntryList.length === 0){
    stuffyData = initList
  } else {
    stuffyData = prevEntryList
  }

  const [submissionList, setSubmissionList] = useState([])
  const [updated, setUpdated] = useState(false)

  function SetSubmissionList(dataChange){
    const dataList = submissionList.length === 0
      ? stuffyData : submissionList
    let updateList = dataList.map(stuffyData=>{
      return stuffyData.stuffyName === dataChange.stuffyName 
        ? {...stuffyData, didFall: dataChange.checked}
        : stuffyData;
    });
    setSubmissionList(updateList)
    setUpdated(true)
  }

  React.useEffect(()=>{
    if(stuffyData.length !== 0 && stuffyDataReady){
      props.setInitStuffyData(stuffyData)
      setStuffyDataReady(false)
    } 
    if(updated){
      props.setSubmissionList(submissionList)
      setUpdated(false)
    }
  },[props, updated, submissionList, stuffyData, stuffyDataReady])

  if (loading || LOADING) return "Loading..."
  if (error || ERROR) return `Error! ${error.message || ERROR.message}`;

  return(
    <>
      <Row 
        className="stuffy-grid"
      >
        {stuffyData.map((stuffyData)=>
          <Col 
            className="card-col"
            key={`col: ${stuffyData.stuffyName}`}
          >
            <StuffyCard
              stuffyData={stuffyData}
              setSubmissionList={SetSubmissionList} 
              key={`card: ${stuffyData.stuffyName}`}
              />
          </Col>
        )}
      </Row>
    </>
  )
}

export default StuffyGrid