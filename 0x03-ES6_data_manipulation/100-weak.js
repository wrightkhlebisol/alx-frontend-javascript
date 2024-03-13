export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const queryTime = weakMap.get(endpoint) || 0;
  const newTime = queryTime + 1;
  weakMap.set(endpoint, newTime);
  if (newTime >= 5) {
    throw new Error('Endpoint load is high');
  }
}
