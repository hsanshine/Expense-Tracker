const { uuid } = require("uuidv4");
const fs = require("fs");
const seed = [
  {
    id: uuid(),
    date: new Date("2019-12-02"),
    name: "books",
    price: "50",
  },
  {
    id: uuid(),
    date: new Date("2019-04-24"),
    name: "travel",
    price: "570",
  },
  {
    id: uuid(),
    date: new Date("2020-08-09"),
    name: "food",
    price: "7600",
  },
  {
    id: uuid(),
    date: new Date("2019-05-18"),
    name: "movies",
    price: "1200",
  },
  {
    id: uuid(),
    date: new Date("2020-10-11"),
    name: "phone",
    price: "1000",
  },
  {
    id: uuid(),
    date: new Date("2021-06-16"),
    name: "partying",
    price: "200",
  },
  {
    id: uuid(),
    date: new Date("2022-02-21"),
    name: "rent",
    price: "2000",
  },
  {
    id: uuid(),
    date: new Date("2022-05-07"),
    name: "udemy-courses",
    price: "6000",
  },
  {
    id: uuid(),
    date: new Date("2022-09-17"),
    name: "clothes",
    price: "9000",
  },
  {
    id: uuid(),
    date: new Date("2021-01-29"),
    name: "trips",
    price: "300",
  },
];

let data = JSON.stringify(seed, null, 6);
fs.writeFileSync("seed.json", data);
