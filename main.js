import { startOfWeek, endOfWeek, format } from "date-fns"
import { login } from "./src/login.js"

const currentDate = new Date();
const startOfWeekDate = startOfWeek(currentDate);
const endOfWeekDate = endOfWeek(currentDate);

const startOfWeekFormatted = format(startOfWeekDate, 'yyyy-MM-dd');
const endOfWeekFormatted = format(endOfWeekDate, 'yyyy-MM-dd');

export { startOfWeekFormatted, endOfWeekFormatted }

login()
