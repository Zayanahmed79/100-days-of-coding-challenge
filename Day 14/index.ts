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

// function magician(array: string[] =["Shafique","Zayan","Talha"]){
//     console.log(`These are the magicians: ${array}`);
// }
// magician();


function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians);
//qs.no 42
