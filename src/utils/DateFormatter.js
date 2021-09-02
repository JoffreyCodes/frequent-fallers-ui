const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function date_formatter (date){
  let date_formatted;

  var MONTH_NUMS = [];
  for (var i = 1; i <= 12; i++) {
    MONTH_NUMS.push(i);
  }

  try{
    date_formatted = `${MONTH_NUMS[date.getMonth()]}/${date.getDate()}/${date.getFullYear()}`
  }catch (err){
    date_formatted = `${MONTH_NUMS[new Date().getMonth()]}/${new Date().getDate()}/${new Date().getFullYear()}`
  }
 
  // console.log(date_formatted)
  return date_formatted
}

export {WEEKDAYS, date_formatter}