//qs.no 52
let smartphone = {
  brand: "Oppo",
  model: "A5 2020",
  specs: {
    Storage: "64 Gb",
    screensize: "6.2 Inch",
    Batterlife: "5000 mAh",
  },
};
console.log(smartphone);

//qs no.53

let programerskill = {
  languages: ["Typescript", "Javascript", "C++"],
  framework: ["React", "Angular", ""],
  tools: ["Webpack", "Git", "Dockers"],
};
console.log(`I will work on ${programerskill.framework[0]},${programerskill.languages[0]},${programerskill.tools[1]}`);

//qs.no 54

function object(...obj:[string,any][]){
  let zayan ={};
  obj.forEach(([key , value])=> zayan[key]=value)
  return zayan;
}
console.log(object(["mobile","oppo"],["car","audi"]));
