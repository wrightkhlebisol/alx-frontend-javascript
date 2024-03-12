export default function getStudentsByLocation(objArr, city) {
  if (Array.isArray(objArr) && typeof city === 'string') {
    return objArr.filter((obj) => obj.location === city);
  }

  return [];
}
