import React, {useState, useEffect} from 'react'
import DateContainer from './DateContainer'

function NavBarPanel(props) {

  return (
    <>
      <DateContainer 
        date={props.date}
        setDate={props.setDate}
        setOnCompleted={props.setOnCompleted} 
      />
    </>
  )
}

export default NavBarPanel
