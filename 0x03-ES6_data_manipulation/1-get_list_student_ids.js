export default function getListStudentIds(getListStudents) {
  function getUserId(item) {
    return item.id;
  }
  if (typeof getListStudents !== 'object') {
    return [];
  }
  return getListStudents.map(getUserId);
}
