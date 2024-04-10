//qs.no 61

enum vehicles {
  cars,
  trucks,
  motorcycle,
}
console.log(vehicles.cars); //It will show 0
console.log(vehicles[0]); //It wil show cars instead of 0

//qs.no 62
//interface(blueprint) is for to ensure student have name , age and courses.

interface student {
  name: string;
  age: number;
  courses: string[];
}
let Student: student = {
  name: "zayan",
  age: 19,
  courses: ["Math", "Science", "History"],
};
console.log(Student);

//qs.no.63

type shape = {
  kind: "circle" | "rectangle";
  radius?: number;
  length?: number;
  width?: number;
};
let circle: shape = {
  kind: "circle",
  radius: 6,
};
let rectangle: shape = {
  kind: "rectangle",
  length: 4,
  width: 4,
};

console.log(circle);
console.log(rectangle);
