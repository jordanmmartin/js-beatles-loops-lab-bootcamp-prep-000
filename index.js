// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = []
  
  for (i = 0; i < musicians.length; i++) {
      var string = musicians[i] + ' plays ' + instruments[i]
      array.pop(string)
  }
}