import React from 'react'
import ListCheckedStuffies from './ListCheckedStuffies'
import SubmissionSequence from './SubmissionSequence'

function SubmissionPanel(props) {  
  return (
    <>
      <ListCheckedStuffies
        stuffyCheckedList={props.stuffyCheckedList}
      />
      <SubmissionSequence
        date={props.date}
        stuffyCheckedList={props.stuffyCheckedList} 
      />
    </>
  )
}

export default SubmissionPanel
