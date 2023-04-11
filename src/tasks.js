import inquirer from "inquirer";
import {
  tests,
  teachers,
  homeworks,
  directors,
  subjectavarages,
  evaluations,
} from "./functions.js";
import { startOfWeekFormatted, endOfWeekFormatted } from "../main.js";
import { goodbye } from "./exit.js";

let anns;

function tasks() {
  setTimeout(() => {
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "first_task",
          message: "Choose a task to do",
          choices: [
            "View the announced tests",
            "View the list of the teachers teaching in this school",
            "View the list of directors",
            "View your evaluations",
            "View your avarages from each subject",
            "View the list of your homeworks on the current week",
            "Exit",
          ],
        },
      ])
      .then((answer) => {
        anns = answer;
        switch (answer.first_task) {
          case "View the announced tests":
            tests();
          case "View the list of the teachers teaching in this school":
            teachers();
          case "View the list of directors":
            directors();
          case "View your evaluations":
            evaluations(startOfWeekFormatted, endOfWeekFormatted);
          case "View your avarages from each subject":
            subjectavarages();
          case "View the list of your homeworks on the current week":
            homeworks(startOfWeekFormatted, endOfWeekFormatted);
          case "Exit":
            goodbye();
            break;
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, 3000);
}

export { tasks, anns };
