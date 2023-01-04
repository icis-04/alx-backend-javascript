export default function getStudentIdsSum(getListStudents) {
  function getUserId(item) {
    return item.id;
  }
  if (typeof getListStudents !== 'object') {
    return [];
  }
  return getListStudents.map(getUserId).reduce((x, y) => x + y);
}
