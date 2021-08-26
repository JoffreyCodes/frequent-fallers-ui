import React, {useState, useEffect} from 'react'
import DateContainer from './DateContainer'

function NavBarPanel(props) {
  const [date, setDate] = useState();
  useEffect(()=>{
    props.setDate(date);
  })
  return (
    <>
      <DateContainer setDate={setDate} />
    </>
  )
}

export default NavBarPanel
