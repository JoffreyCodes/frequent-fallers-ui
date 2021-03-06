const STUFFY_PARTNER_LIST = [
  {stuffyName:'Rexie', stuffyPartner:'Rexina'},
  {stuffyName:'Rexina', stuffyPartner:'Rexie'},
  {stuffyName:'Hoot', stuffyPartner:'Jeffrey'},
  {stuffyName:'Jeffrey', stuffyPartner:'Hoot'},
  {stuffyName:'Piggie', stuffyPartner:'Birdie'},
  {stuffyName:'Birdie', stuffyPartner:'Piggie'},
  {stuffyName:'Pillow', stuffyPartner:'Football'},
  {stuffyName:'Football', stuffyPartner:'Pillow'},
  {stuffyName:'Poohp', stuffyPartner:'Fart'},
  {stuffyName:'Fart', stuffyPartner:'Poohp'},
  {stuffyName:'Grizzly', stuffyPartner:'Banana'},
  {stuffyName:'Banana', stuffyPartner:'Grizzly'},
  {stuffyName:'Dino', stuffyPartner:'Dart-Tingles'},
  {stuffyName:'Dart-Tingles', stuffyPartner:'Dino'},
  {stuffyName:'Octi', stuffyPartner:'n/a'},
  {stuffyName:'Benny', stuffyPartner:'n/a'},
]
function partnerMatch(stuffyName, filteredTrue) {
  const trueList = filteredTrue.map(stuffyData=>stuffyData.stuffyName)
  const stuffyPair = STUFFY_PARTNER_LIST.find(stuffyPair => 
    stuffyPair.stuffyName === stuffyName
  )
  
  const octiPoints = stuffyName==='Octi' && trueList.length >= 8 ? true : false
  const bennyPoints = stuffyName ==='Benny' && (
    (trueList.includes('Dino') && trueList.includes('Grizzly')) || 
    (trueList.includes('Dino') && trueList.includes('Dart-Tingles')) ||
    (trueList.includes('Grizzly') && trueList.includes('Dart-Tingles'))
  ) 
  
  return trueList.includes(stuffyPair.stuffyPartner) || octiPoints || bennyPoints ? stuffyName : null
}

export {partnerMatch}