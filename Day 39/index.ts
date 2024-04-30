//qs.no 115

function week(day: number) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thrusday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
  }
}
week(4);

//qs.no 116

function season(month: string) {
  switch (month) {
    case "march":
    case "april":
    case "may":
      console.log("Spring");
      break;
    case "june":
    case "july":
    case "august":
      console.log("Summer");
      break;
    case "september":
    case "october":
    case "november":
      console.log("Autumn");
    case "december":
    case "january":
    case "febrary":
      console.log("Winter");
      break;
  }
}
season("january");

//qs.no 117

function usedefault(value: number) {
  switch (value) {
    case 1:
      console.log("Tanzeel is a gentleman");
      break;
    case 2:
      console.log("Shoaib is a gentleman");
      break;
    case 3:
      console.log("Shakeel is a gentleman");
      break;
    case 4:
      console.log("Dainyal is a gentleman");
      break;
    default:
      console.log("Shafique is a gentleman");
  }
}
usedefault(7);
