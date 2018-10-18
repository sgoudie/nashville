/* Check whether the key uses sharps and flats */
module.exports = (root) => {
  return root === 'F' || root.includes('b');
};
