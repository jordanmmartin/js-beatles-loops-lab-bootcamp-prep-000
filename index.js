// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = []
  
  for (let i = 0; i < musicians.length; i++) {
      var string = musicians[i] + ' plays ' + instruments[i]
      array.push(string)
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length){
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}