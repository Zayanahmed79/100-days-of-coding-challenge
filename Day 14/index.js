function createalbum(name, relaese, title) {
    return {
        name: name,
        relaese: relaese,
        title: title,
    };
}
var album1 = createalbum("zayan", 2023, "Tu hai kahan");
var album2 = createalbum("shafiuqe", 2010, "der na kahin mor");
console.log(album1);
console.log(album2);
//qs.no 41
// function magician(array: string[] =["Shafique","Zayan","Talha"]){
//     console.log(`These are the magicians: ${array}`);
// }
// magician();
// function magician(array:string[]){
//     for (let i = 0; i < array.length; i++){
//             array[i] = array[i] + "greetings";
//     }
// }
// magician(array);
// showmagician(array)
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians);
//qs.no 42
