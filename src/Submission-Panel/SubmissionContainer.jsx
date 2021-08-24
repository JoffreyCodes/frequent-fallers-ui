import React, {useState} from 'react'
import ListCheckedStuffies from './ListCheckedStuffies'
import DateContainer from './DateContainer'

function SubmissionContainer(props) {
  const [weekday, setWeekday] = useState('')


  return (
    <>
      <DateContainer 
        setWeekday={(val)=>setWeekday(val)}
      />
      <ListCheckedStuffies
        stuffyCheckedList={props.stuffyCheckedList}
      />
        <h2>{weekday}</h2>
    </>
  )
}

export default SubmissionContainer
