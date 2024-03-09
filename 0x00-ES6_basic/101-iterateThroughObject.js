export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.reduce((currStr, employee) => `${currStr} | ${employee}`);
}
