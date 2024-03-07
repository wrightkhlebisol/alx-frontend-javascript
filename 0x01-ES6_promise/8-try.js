export default function divideFunction(numerator, denominator) {
  try {
    return numerator / denominator;
  } catch (e) {
    throw new Error('cannot divide by 0');
  }
}
