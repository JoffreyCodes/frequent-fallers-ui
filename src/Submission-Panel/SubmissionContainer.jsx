import React, {useState} from 'react'
import ListCheckedStuffies from './ListCheckedStuffies'

function SubmissionContainer(props) {
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  function ShowWeekday(){
    let message;
    try{
      const dateNum= props.date.getDay()
      message=(`${weekdays[dateNum]}`)
    }catch (err){
      message=("Must select a date")
    }
    return message
  }
  return (
    <>
      <ListCheckedStuffies
        stuffyCheckedList={props.stuffyCheckedList}
      />
        <ShowWeekday />
    </>
  )
}

export default SubmissionContainer
