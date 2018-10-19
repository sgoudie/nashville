const Nashville = require('./index.js');

const nashville = new Nashville('G major');

console.log(nashville.key);
console.log(nashville.flatCheck());
console.log(nashville.keyRoot);
console.log(nashville.keyType);
console.log(nashville.keyScale);

console.log(nashville.getChord('5'));
console.log(nashville.getChords(['1', '4', '5', '1']));
console.log(nashville.getChords([1, 4, 5, 1]));
console.log(nashville.getChords(['1', '5/7', '4', '2', '1', '7']));

nashville.key = 'Eb mixolydian';

console.log(nashville.key);
console.log(nashville.keyRoot);
console.log(nashville.keyScale);

console.log(nashville.getChord('5/7'));
console.log(nashville.getChords([1, 4, 5, 1]));
console.log(nashville.getChords(['1', '5/7', '4', '2', '1', '7']));
