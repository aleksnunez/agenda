// in order to run project with dynamic pages, run: http-server -c-1 
// in terminal

import Timer from "./Timer.js"
import Agenda from "./Agenda.js"
import { daySelector, displayWeekday } from "./Date.js"
import Objective from "./Objective.js";

let date = new Date();
let day = date.getDay();
let dayNum = date.getDate();

new Timer (
    document.querySelector(".timer")
)

new Agenda (
    document.querySelector(".agenda")
)

new Objective (
    document.querySelector(".objective")
)


let dayOfWeek = daySelector(day) + ', ' + String(dayNum);
displayWeekday(dayOfWeek)