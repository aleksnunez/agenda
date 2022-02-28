// in order to run project with dynamic pages, run: http-server -c-1 
// in terminal

import Timer from "./Timer.js"
import List from "./List.js"
import { daySelector, displayWeekday } from "./Date.js"

let date = new Date();
let day = date.getDay();
let dayNum = date.getDate();

new Timer (
    document.querySelector(".timer")
)

new List (
    document.querySelector(".list")
)



let dayOfWeek = daySelector(day) + ', ' + String(dayNum);
displayWeekday(dayOfWeek)