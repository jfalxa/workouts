import addMonths from "date-fns/addMonths";

const now = new Date().setDate(1);
const months = [now];

// create a list of the 1st days of the next 12 months
for (let i = 1; i < 12; i++) {
  months.push(addMonths(months[i - 1], 1));
}

export default months;
