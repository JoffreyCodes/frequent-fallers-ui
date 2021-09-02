import { date_formatter } from "../utils/DateFormatter"

function HandleSubmit(date, didFallData) {
  
  const date_formatted = date_formatter(date)

  function sendData(stuffyName, didFall){
    fetch(process.env.REACT_APP_API_ENDPOINT, {	
      method: 'POST',	
      headers: { 'Content-Type': 'application/json' },	
      body: JSON.stringify({ query: 
        `mutation {
          updateStuffyFall(
            date:"${date_formatted}"
            stuffyName:"${stuffyName}"
            didFall:${didFall}
          ){
            date  stuffyName  didFall
          }
        }`
      }),	
    })   
  }

  return (
    didFallData.forEach((stuffyData)=>{
      sendData(stuffyData.stuffyName, stuffyData.didFall)
    })
  )
}

export default HandleSubmit