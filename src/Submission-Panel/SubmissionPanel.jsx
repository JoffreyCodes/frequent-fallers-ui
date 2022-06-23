import React from 'react'
import {Container} from 'react-bootstrap'

import ListCheckedStuffies from './ListCheckedStuffies'
import ResultsContainer from './ResultsContainer'
import SubmissionSequence from './SubmissionSequence'
import UpdateSubmissionSequence from './UpdateSubmissionSequence'

function SubmissionPanel(props) {
  return (
    <>
      <Container className="submission-container">
        {props.initStuffyData
        ? <>
            <ListCheckedStuffies
              initStuffyData={props.initStuffyData}
              updateSubList={props.toSubmissionComponent}
            />
            <Container className="submission-container-buttons">
            <div className="d-grid gap-2">

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
                <ResultsContainer />
                </div>
            </Container>
          </>
          : null}
      </Container>
    </>
  )
}

export default SubmissionPanel
