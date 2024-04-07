//qs.no 40
type album = {
  name: string;
  relaese: number;
  title: string;
};
function createalbum(name: string, relaese: number, title: string): album {
  return {
    name,
    relaese,
    title,
  };
}
let album1 = createalbum("zayan", 2023, "Tu hai kahan");
let album2 = createalbum("shafiuqe", 2010, "der na kahin mor");

console.log(album1);
console.log(album2);

//qs.no 41
let magician = ["zayan","Talha","Hamdan"]
function magicians(magician : string []){
  magician.forEach (namemagician => {
    console.log(namemagician);
     
})}
magicians(magician)
//qs.no.42

// function magiciannamae(magician : string[]){
//   magician.forEach(m_names =>{
//     console.log(m_names + " The Great");
    
//   })
// }
// magiciannamae(magician)


function magiciannamae(magician:string[]){
    for(let i=0; i < magician.length; i++){
      console.log(magician[i] + " The Great");
    }
}magiciannamae(magician)

//both of these loops are applicable(for loop and foreach loop)