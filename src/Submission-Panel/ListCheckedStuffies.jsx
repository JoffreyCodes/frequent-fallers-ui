import React from 'react'
import { Table } from 'react-bootstrap'

function ListCheckedStuffies(props) {

  const getInitData = props.initStuffyData.filter((stuffyData) =>
  stuffyData.didFall === true)

  const getUpdateSubList = props.updateSubList? props.updateSubList.filter((stuffyData) =>
  stuffyData.didFall === true) : []

  let filteredTrue=[]
  
  // New Data Entry 
  if(getInitData.length === 0 && getUpdateSubList.length === 0){
    filteredTrue = getInitData
  }
  if(getInitData.length === 0 && getUpdateSubList.length !== 0){
    filteredTrue = getUpdateSubList
  }

  // Update Data Entry
  if(getInitData.length !== 0 && getUpdateSubList.length === 0){
    filteredTrue = getInitData
  }
  if(getInitData.length !== 0 && getUpdateSubList.length !== 0){
    filteredTrue = getUpdateSubList
  }

/*
  TODO: date returns twice causing issues.
  When user causes an event in new data entry (ie
  check and/or uncheck), followed by changing date,
  the first date rendered is returning the initList 
  data of the new entry date instead of the data of
  the intended initList of the date to update.
  Attempt: Make DateContainer only return a single 
  date instance
*/ 

  return (
    <div className="CheckedStuffiesContainer">
      <Table 
        striped 
        bordered 
        hover 
        size="sm"
        variant='secondary'      
      >
        <thead>
          <tr>
            <th>stuffy-name</th>
            <th>count</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrue.map((stuffyData, i)=>
            <tr key={i}>
              <td>
                {stuffyData.stuffyName}
              </td>
              <td>
                1
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ListCheckedStuffies
