import React from 'react'
import { StuffyGrid } from './StuffyGrid'
import { date_formatter } from '../utils/DateFormatter'

export function CardsPanel(props){  
  const date = date_formatter(props.date)
  return(   
    <>
      <StuffyGrid 
        date = {date}
        setStuffyCheckedList={props.setStuffyCheckedList}
        setNewSubmission={props.setNewSubmission} 
        setSubmissionList={props.setToSubmissionComponent}
        setInitStuffyData={props.setInitStuffyData}
        setUserChecked={props.setUserChecked}
      />
    </>
  )
}

export default CardsPanel