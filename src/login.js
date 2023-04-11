import { Kreta } from "kreta.js";
import inquirer from "inquirer";
import { tasks, anns } from "./tasks.js";

let userdata;

function login() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your username:",
        default: "none",
        validate: function (input) {
          const done = this.async();

          setTimeout(function () {
            if (typeof input !== "string") {
              done("The username can be only a string!");
              return;
            }
            done(null, true);
          }, 3000);
        },
      },
      {
        type: "password",
        name: "pass",
        message: "Enter the password for the entered user:",
        default: "none",
        validate: function (input) {
          const done = this.async();

          setTimeout(function () {
            if (typeof input !== "string") {
              done("The password can be only a string!");
              return;
            }
            done(null, true);
          }, 3000);
        },
      },
      {
        type: "input",
        name: "school_code",
        message: "Enter the institute code: (example: klik<numbers>)",
        default: "none",
        validate: function (input) {
          const done = this.async();

          setTimeout(function () {
            if (typeof input !== "string") {
              done("The institue code can be only a string!");
              return;
            }
            done(null, true);
          }, 3000);
        },
      },
    ])
    .then((answers) => {
      const ans = answers;
      console.log("Logging in...");
      console.info(
        "The CLI only works if the provided login details are correct."
      );
      const kreta = new Kreta({
        username: ans.username,
        password: ans.pass,
        institute_code: ans.school_code,
      });
      userdata = answers;
      setTimeout(() => {
        console.log("Login successfull!");
      }, 300);
      kreta.getStudent().then((student) => {
          console.log(`Hello ${student.Nev}!`)
      }).catch((e) => {
          console.error(e)
      })
      setTimeout(() => {
        while (anns !== "Exit") {
          tasks();
        }
      }, 4000);
    })
    .catch((e) => {
      console.error(e);
    });
}

export { login, userdata };
