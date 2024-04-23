//qs.no 109

function print_gm() {
  let time = new Date();
  let hours = time.getHours();
  if (hours < 12) {
    console.log(" Good Morning! ");
  } else {
    console.log(" Good Evening! ");
  }
}
print_gm();

//qs.no 110

function assign(student: number) {
  if (student >= 80) {
    console.log(`Grade is A`);
  } else if (student >= 70 && student < 80) {
    console.log(`Grade is B`);
  } else if (student >= 60 && student < 70) {
    console.log(`Grade is C`);
  } else if (student >= 50 && student < 60) {
    console.log(`Grade is D`);
  } else if (student < 50) {
    console.log(`Grade is F`);
  }
}
assign(80);

//qs.no 111

function check_age(age: number) {
  if (age <= 13 ) {
    console.log("He/She is a Child");
  } else if (age <= 19) {
    console.log("He/She is a Teenager");
  } else if (age > 19) {
    console.log("He/She is an Adult");
  }
}
check_age(12)
check_age(16)
check_age(65)