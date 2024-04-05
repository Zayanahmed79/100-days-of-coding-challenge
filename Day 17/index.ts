//qs no. 49
function myHob(...a: string[]) {
  a.forEach((hobby) => {
    console.log(`I really enjoy ${hobby}`);
  });
}
myHob("Swimming", "Football", "Basketball");

//qs no. 50

console.log(`My Ideal day, today I woke up early in the morning. The very first thing i do is to:
1. open my dam eyes 
secondly,
2.I change my position 
and thirdly
3.I finally get up from my bed`);

//qs no.51

function area_rec(length: number, width: number) {
  let aarw = () => {
    console.log(`Area of Rectangle: ${length * width}`);
  };
  aarw();
}
area_rec(67, 9);