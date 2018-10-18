const getChord = require('./get-chord');

module.exports = ({ scale, degrees, scaleType }) =>
  degrees.map((degree) => getChord({ scale, degree, scaleType }));
