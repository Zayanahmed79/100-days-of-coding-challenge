//qs.no 97

function dates() {
  let now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  console.log(`${day}-${month}-${year}`);
}
dates();

//qs.no 98

function daysleft() {
  let now = new Date();
  let nextyr = new Date(now.getFullYear() + 1, 0, 1);

  let daysleftuptonext = Math.ceil(
    (nextyr.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  console.log(daysleftuptonext, "days left until next year");
}
daysleft();

//qs no 99

function bhd(month :  number, day : number){
  const today = new Date()
  let currentyear = today.getFullYear()
  let nextbhd = new Date (currentyear,month -1 ,day 0)
  if(today > nextbhd){
    nextbhd.setFullYear(currentyear + 1)
  }
  console.log(`Next Birthday: ${nextbhd.toDateString()}`);
  
}
bhd(4, 3)//3rd April


