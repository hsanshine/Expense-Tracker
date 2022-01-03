//helper function to filter entries
const filterEntries = (entriesArray, Year) => {
  let results = entriesArray.filter(
    (entry) => new Date(entry.date).getFullYear() === Number(Year)
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

const dataPoints = (objArray) => {
  const finalArray = new Array(12).fill(0); //intialized with zeros.
  for (const entry of objArray) {
    let month = Number(new Date(entry.date).getMonth());

    finalArray[month] = finalArray[month] + Number(entry.price);
  }

  return finalArray;
};

const processDate = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  return [year, month, day];
};

export { filterEntries, monthName, dataPoints, processDate };
