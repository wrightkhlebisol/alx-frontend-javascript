export default function hasValuesFromArray(set, array) {
  if (typeof set === 'object' && Array.isArray(array)) {
    const isInSet = (val) => set.has(val);
    return array.every(isInSet);
  }
  return false;
}
