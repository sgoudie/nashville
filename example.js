const Nashville = require('./index.js')

const song = new Nashville('G major')

console.log(song.key)
console.log(song.flatCheck())
console.log(song.keyRoot)
console.log(song.keyType)
console.log(song.keyScale)

console.log(song.getChord('5'))
console.log(song.getChords(['1', '4', '5', '1']))
console.log(song.getChords([1, 4, 5, 1]))
console.log(song.getChords(['1', '5/7', '4', '2', '1', '7']))

song.keyChange('Eb mixolydian')

console.log(song.key)
console.log(song.keyRoot)
console.log(song.keyScale)

console.log(song.getChord('5/7'))
console.log(song.getChords([1, 4, 5, 1]))
console.log(song.getChords(['1', '5/7', '4', '2', '1', '7']))
