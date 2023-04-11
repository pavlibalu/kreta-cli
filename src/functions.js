import { Kreta } from "kreta.js/dist/index.js";
import { userdata } from "./login.js";

function teachers() {
    const kreta = new Kreta({
        username: userdata.username,
        password: userdata.pass,
        institute_code: userdata.school_code
    })
  return console.log(kreta.Administration.getTeachers());
}

function tests() {
    const kreta = new Kreta({
        username: userdata.username,
        password: userdata.pass,
        institute_code: userdata.school_code
    })
  return console.log(kreta.getAnnouncedTests());
}

function homeworks(a, b) {
    const kreta = new Kreta({
        username: userdata.username,
        password: userdata.pass,
        institute_code: userdata.school_code
    })
  return console.log(kreta.getHomeworks({ dateFrom: a, dateTo: b }));
}

function directors() {
    const kreta = new Kreta({
        username: userdata.username,
        password: userdata.pass,
        institute_code: userdata.school_code
    })
  return console.log(kreta.Administration.getDirectors());
}

function subjectavarages() {
    const kreta = new Kreta({
        username: userdata.username,
        password: userdata.pass,
        institute_code: userdata.school_code
    })
  return console.log(kreta.getSubjectAverages());
}

function evaluations(a, b) {
    const kreta = new Kreta({
        username: userdata.username,
        password: userdata.pass,
        institute_code: userdata.school_code
    })
  return console.log(kreta.getEvaluations({ dateFrom: a, dateTo: b }));
}

export { teachers, tests, directors, homeworks, subjectavarages, evaluations };