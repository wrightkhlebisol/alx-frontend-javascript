export default function createIteratorObject(report) {
  const iteratorArr = [];

  const { allEmployees } = report;
  // eslint-disable-next-line guard-for-in
  for (const dept in allEmployees) {
    iteratorArr.push(...allEmployees[dept]);
  }

  return iteratorArr;
}
