export default function getStudentIdsSum(studentsList) {
  if (Array.isArray(studentsList)) {
    return studentsList.reduce((acc, cur) => acc + cur.id, 0);
  }
  return 0;
}
