export default function getStudentsByLocation(getListStudents) {
  function getUserId(item) {
    return item;
  }
  if (typeof getListStudents !== 'object') {
    return [];
  }
  return getListStudents.map(getUserId).filter((x) => x.location === 'San Francisco');
}
