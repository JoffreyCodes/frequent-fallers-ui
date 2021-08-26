import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import DatePicker from 'react-date-picker'

function DateContainer(props) {
  const [date, setDate] = useState(new Date());
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  function ShowWeekday(){
    let message;
    try{
      const dateNum= date.getDay()
      message=(`${weekdays[dateNum]}`)
    }catch (err){
      message=("Please pick a date: ")
    }
    return message
  }

  useEffect(()=>{
    props.setDate(date);
  })

  return (
    <Container className="date-container">
      <ShowWeekday />
      {' '}
      <DatePicker 
        onChange={setDate}
        value={date}
      />
    </Container>
  )
}

export default DateContainer
