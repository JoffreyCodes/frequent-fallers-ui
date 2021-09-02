import React from 'react'
import DateContainer from './DateContainer'

function NavBarPanel(props) {

  return (
    <>
      <DateContainer 
        date={props.date}
        setDate={props.setDate}
        userChecked={props.userChecked}
      />
    </>
  )
}

export default NavBarPanel
