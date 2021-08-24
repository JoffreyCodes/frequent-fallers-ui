import React, {useState} from 'react'
import DatePicker from 'react-date-picker'

function DateContainer(props) {
  const [date, setDate] = useState(new Date());
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  function InputDate(){
    let message;
    try{
      const dateNum= date.getDay()
      message=(`${weekdays[dateNum]}`)
    }catch (err){
      message=("Please pick a date: ")
    }
    return message
  }

  React.useEffect(()=>{
    props.setWeekday(InputDate());
  })

  return (
    <>
    <InputDate />
    <hr/>
      <DatePicker 
        onChange={setDate}
        value={date}
      />
    </>
  )
}

export default DateContainer
