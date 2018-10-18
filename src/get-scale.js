const noteLabels = require('./lib/note-labels');
const scaleLib = require('./lib/scales');
const flatCheck = require('./lib/flat-check');

module.exports = (root, scaleType) => {
  const notes = flatCheck(root) ? noteLabels.flats : noteLabels.sharps;
  const { intervals } = scaleLib[scaleType];
  const scale = [root];
  let lastIndex = notes.indexOf(root);

  intervals.forEach((int) => {
    let index = lastIndex + int;
    if (index >= notes.length) index = index - notes.length;
    scale.push(notes[index]);
    lastIndex = index;
  });

  return scale;
};
