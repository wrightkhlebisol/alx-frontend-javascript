export default function getListStudentIds(objArr) {
  if (Array.isArray(objArr)) {
    return objArr.map((obj) => obj.id);
  }

  return [];
}
