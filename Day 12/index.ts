//qs .no 34
let favpizza = ["Dominos", "Broadway", "Italian"];
favpizza.forEach((pizza) => {
  if (pizza === "Dominos") {
    console.log(
      `I like ${pizza} because of its cheese present at its corners.`
    );
  } else if (pizza === "Broadway") {
    console.log(
      `I like ${pizza} because of its new flavours that fill up my mouth with joy.`
    );
  } else {
    console.log(`I like ${pizza} because of its classic taste.`);
  }
});

//qs.no 35

let goodpet = ["Dog","cat","Parrot"]
goodpet.forEach((gpet)=> {
    console.log(`${gpet} is a good pet. It helps to pass good time.\nIt would be a great pet.`);
    
})

//qs.no 36

function tshirt(colour:string = "Brown" , size:string ="Medium" , logo: string = "Cool"):string{

  return `T-shirt's details:\nT-shirt colour: ${colour},\nT-shirt size: ${size},\nT-shirts logo: ${logo}`

}



console.log(tshirt);

