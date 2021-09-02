import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import DatePicker from 'react-date-picker'
import {WEEKDAYS} from '../utils/DateFormatter'

function DateContainer(props) {

  function ShowWeekday(){
    let message;
    try{
      const dateNum= props.date.getDay()
      message=(`${WEEKDAYS[dateNum]}`)
    }catch (err){
      message=("Please pick a date: ")
    }
    return message
  }

  return (
    <Container className="date-container">
      <ShowWeekday />
      {' '}
      <DatePicker
        disabled={props.userChecked}
        onChange={props.setDate}
        value={props.date}
      />
    </Container>
  )
}

export default DateContainer
