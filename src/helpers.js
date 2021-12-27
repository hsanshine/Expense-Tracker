//helper function to filter entries
const filterEntries = (entriesArray, Year) => {
  let results = entriesArray.filter(
    (entry) => entry.date.getFullYear() === Number(Year)
  );
  return results;
};

// const compareDates = (date1, date2){

// }

const monthName = (month) => {
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[Number(month)];
};
export { filterEntries, monthName };
