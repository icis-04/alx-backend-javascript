export default function getListStudentIds(getListStudents) {
    if (typeof getListStudents !== 'object') {
        return []
    } else {
        const val = getListStudents
        const body = []
        for (let i of val) {
            body.push(i.id)
        }
        return body
    }
}
