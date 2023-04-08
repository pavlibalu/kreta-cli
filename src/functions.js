import { userdata } from "./login.js"

function teachers() {
    return console.log(userdata.Administration.getTeachers())
}

function tests() {
    return console.log(userdata.getAnnouncedTests())
}

function homeworks(a, b) {
    return console.log(userdata.getHomeworks({ dateFrom: a, dateTo: b }))
}

function directors() {
    return console.log(userdata.Administration.getDirectors())
}

function subjectavarages() {
    return console.log(userdata.getSubjectAverages())
}

function evaluations(a, b) {
    return console.log(userdata.getEvaluations({ dateFrom: a, dateTo: b }))
}

export { teachers, tests, directors, homeworks, subjectavarages, evaluations }