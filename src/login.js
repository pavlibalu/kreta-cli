import { Kreta } from "kreta.js";
import inquirer from "inquirer"
import { tasks } from "./tasks.js";

let userdata;

function login() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "username",
                message: "Enter the username: // Add meg a felhasználónevet: ",
                default: "none",
                validate: function (input) {
                    const done = this.async();

                    setTimeout(function () {
                        if (typeof input !== "string") {
                            done("The username can be only a string! // A felhasználónév csak szöveg lehet.");
                            return;
                        }
                        done(null, true)
                    }, 3000)
                }
            },
            {
                type: "password",
                name: "pass",
                message: "Enter the password for the user: // Add meg a felhasználónévhez tartozó jelszót: ",
                default: "none",
                validate: function (input) {
                    const done = this.async();

                    setTimeout(function () {
                        if (typeof input !== "string") {
                            done("The password can be only a string! // A jelszó csak szöveg lehet.");
                            return;
                        }
                        done(null, true)
                    }, 3000)
                }
            },
            {
                type: "input",
                name: "school_code",
                message: "Enter the institute code: (example: klik<numbers>) // Add meg az intézménykódot: (példa: klik<számok>)",
                default: "none",
                validate: function (input) {
                    const done = this.async();

                    setTimeout(function () {
                        if (typeof input !== "string") {
                            done("The institue code can be only a string! // Az isk. kód csak szöveg lehet.");
                            return;
                        }
                        done(null, true)
                    }, 3000)
                }
            }
        ])
        .then((answers) => {
            const ans = answers
            console.log("Logging in... // Bejelentkezés...")
            console.info("The CLI only works if the provided login details are correct. // Csak akkor működik az app ha a megadott bejelentkezési adatok helyesek.")
            const kreta = new Kreta({
                username: ans.username,
                password: ans.pass,
                institute_code: ans.school_code
            })
            userdata = kreta
            setTimeout(() => {
                console.log("Login successfull! // Sikeres bejelentkezés!")
            }, 3000)
            kreta.getStudent().then((student) => {
                console.log(`Hello ${student.Nev}!`)
            }).catch((e) => {
                console.error(e)
            })
            setTimeout(() => {
                tasks()
            }, 4000)
        })
        .catch((e) => {
            console.error(e)
        })
}

export { login, userdata }
