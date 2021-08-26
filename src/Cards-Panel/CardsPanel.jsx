import React from 'react'
import { StuffyGrid } from './StuffyGrid'

export function CardsPanel(props){
  return(   
    <>
      <StuffyGrid 
        stuffyList={props.stuffyList}
        setStuffyCheckedList={(val)=>props.setStuffyCheckedList(val)} 
      />
    </>
  )
}

export default CardsPanel