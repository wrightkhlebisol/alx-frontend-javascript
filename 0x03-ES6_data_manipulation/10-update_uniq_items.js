export default function updateUniqueItems(map) {
  map.forEach((val, key, map) => {
    if (val === 1) {
      map.set(key.toString(), 100);
    }
  });
}
