import React from 'react'
import DateContainer from './DateContainer'

function NavBarPanel(props) {

  return (
    <>
      <DateContainer 
        date={props.date}
        setDate={props.setDate}
      />
    </>
  )
}

export default NavBarPanel
