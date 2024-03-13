export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const queryTime = weakMap.get(endpoint);
    if (queryTime >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, queryTime + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
