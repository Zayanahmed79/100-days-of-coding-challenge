//qs no 46
let laptop = {
  name: "Hp",
  model: "840",
  year: 2017,
  describe: function () {
    console.log(
      `This is ${laptop.name} ${laptop.model} released in ${laptop.year}`
    );
  },
};
laptop.describe();

//qs.no 47

let lap = [
  {
    name: "HP",
    model: "840",
    year: "2017",
  },
  {
    name: "Dell",
    model: "7400",
    year: "2018",
  },
];
let [lap1, lap2] = lap;
console.log(lap1);
console.log(lap2);

//qs.no 48
let price1 = [1000, 1700, 1200];
let prize2 = [1300, 1900, 1400];
console.log([...price1, ...prize2].sort((a, b) => b - a));
