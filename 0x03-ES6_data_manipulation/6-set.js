export default function setFromArray(arrayToSet) {
  if (Array.isArray(arrayToSet)) {
    return new Set(arrayToSet);
  }

  return [];
}
