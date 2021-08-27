function HandleSubmit(date, didFallData) {
  
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  var MONTH_NUMS = [];
  for (var i = 1; i <= 12; i++) {
    MONTH_NUMS.push(i);
  }
  const date_formatted = `"${MONTH_NUMS[month]}/${day}/${year}"`

  function sendData(stuffyName, didFall){
    fetch(process.env.REACT_APP_API_ENDPOINT, {	
      method: 'POST',	
      headers: { 'Content-Type': 'application/json' },	
      body: JSON.stringify({ query: 
        `mutation LogStuffyFall{
          logStuffyFall(
            date:${date_formatted}
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
      sendData(stuffyData.stuffyName, stuffyData.isChecked)
    })
  )
}

export default HandleSubmit