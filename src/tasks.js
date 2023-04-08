import inquirer from "inquirer";
import { tests, teachers, homeworks, directors, subjectavarages, evaluations } from "./functions.js";
import { startOfWeekFormatted, endOfWeekFormatted } from "../main.js";
import { goodbye } from './exit.js';

let anns;


function tasks() {
    setTimeout(() => {
        inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "first_task",
                    message: "Choose a task to do // Válaszd ki mit szeretnél tenni",
                    choices: ['View the announced tests // Nézd meg a bejelentett dolgozatokat',
                        'View the list of the teachers teaching in this school // Nézd meg a tanárok listáját',
                        'View the list of directors // Nézd meg az igazgatók listáját',
                        'View your evaluations // Nézd meg a jegyeidet a héten',
                        'View your avarages from each subject // Nézd meg az átlagaidat minden tantárgyból',
                        'View the list of your homeworks on the current week // Nézd meg az adott héten feladott házi feladatokat',
                        'Exit // Kilépés'
                    ]
                }
            ])
            .then((answer) => {
                anns = answer
                console.log(anns)
                console.log(startOfWeekFormatted)
                console.log(endOfWeekFormatted)
                switch (answer.first_task) {
                    case 'View the announced tests // Nézd meg a bejelentett dolgozatokat':
                        tests()
                        break
                    case 'View the list of the teachers teaching in this school // Nézd meg a tanárok listáját':
                        teachers()
                        break
                    case 'View the list of directors // Nézd meg az igazgatók listáját':
                        directors()
                        break
                    case 'View your evaluations // Nézd meg a jegyeidet a héten':
                        evaluations(startOfWeekFormatted, endOfWeekFormatted)
                        break
                    case 'View your avarages from each subject // Nézd meg az átlagaidat minden tantárgyból':
                        subjectavarages()
                        break
                    case 'View the list of your homeworks on the current week // Nézd meg az adott héten feladott házi feladatokat':
                        homeworks(startOfWeekFormatted, endOfWeekFormatted)
                        break
                    case 'Exit // Kilépés':
                        goodbye()
                        break
                }
            })
            .catch((e) => {
                console.error(e)
            })
    }, 3000)
}

export { tasks, anns }