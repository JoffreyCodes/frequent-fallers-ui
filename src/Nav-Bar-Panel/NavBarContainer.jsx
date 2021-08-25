import React, {useState} from 'react'
import DateContainer from './DateContainer'

function NavBarContainer() {
  const [weekday, setWeekday] = useState('')

  return (
    <>
      <DateContainer setWeekday={setWeekday} />
    </>
  )
}

export default NavBarContainer
