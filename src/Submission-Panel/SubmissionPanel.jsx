import React from 'react'
import ListCheckedStuffies from './ListCheckedStuffies'
import SubmissionSequence from './SubmissionSequence'
import UpdateSubmissionSequence from './UpdateSubmissionSequence'

function SubmissionPanel(props) {
  return (
    <>
    {props.initStuffyData
    ? <>
        <ListCheckedStuffies
          initStuffyData={props.initStuffyData}
          updateSubList={props.toSubmissionComponent}
        />
        {props.initStuffyData.some(stuffyData=>stuffyData.newEntry === true)
        ? <SubmissionSequence
            date={props.date}
            updateSubList={props.toSubmissionComponent} 
          />
        : <UpdateSubmissionSequence
            date={props.date}
            updateSubList={props.toSubmissionComponent} 
          />
        }
      </>
    : null}
    </>
  )
}

export default SubmissionPanel
